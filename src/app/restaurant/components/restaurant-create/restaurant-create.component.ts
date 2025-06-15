import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Restaurant } from '../../model/restaurant.entity';
import { BaseFormComponent } from '../../../shared/components/base-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

/**
 * Component for creating or editing a Restaurant entity.
 * Uses Angular Material and extends BaseFormComponent for validation.
 */
@Component({
  selector: 'app-restaurant-create-and-edit',
  standalone: true,
  templateUrl: './restaurant-create.component.html',
  styleUrl: './restaurant-create.component.css',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class RestaurantCreateAndEditComponent extends BaseFormComponent {
  @Input() restaurant!: Restaurant;
  @Input() editMode: boolean = false;

  @Output() restaurantAddRequested = new EventEmitter<Restaurant>();
  @Output() restaurantUpdateRequested = new EventEmitter<Restaurant>();
  @Output() cancelRequested = new EventEmitter<void>();

  @ViewChild('restaurantForm', { static: false }) protected restaurantForm!: NgForm;

  constructor() {
    super();
    this.restaurant = new Restaurant({});
  }

  private resetFormState(): void {
    this.restaurant = new Restaurant({});
    this.editMode = false;
    this.restaurantForm.resetForm();
  }

  protected isEditMode(): boolean {
    return this.editMode;
  }

  protected isValid(): boolean {
    return !!this.restaurantForm?.valid;
  }

  protected onSubmit(): void {
    if (this.isValid()) {
      const emitter = this.isEditMode() ? this.restaurantUpdateRequested : this.restaurantAddRequested;
      emitter.emit(this.restaurant);
      this.resetFormState();
    } else {
      console.error('Formulario inválido');
    }
  }

  protected onCancel(): void {
    this.cancelRequested.emit();
    this.resetFormState();
  }
}
