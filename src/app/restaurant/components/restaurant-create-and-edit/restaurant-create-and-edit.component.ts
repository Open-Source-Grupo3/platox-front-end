import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Restaurant } from '../../model/restaurant.entity';
import { RestaurantService } from '../../services/restaurant.service';
import { BaseFormComponent } from '../../../shared/components/base-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {ActivatedRoute, Router} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {NgIf} from '@angular/common';

/**
 * Component for creating or editing a Restaurant entity.
 * Uses Angular Material and extends BaseFormComponent for validation.
 */
@Component({
  selector: 'app-restaurant-create-and-edit-and-edit',
  standalone: true,
  templateUrl: './restaurant-create-and-edit.component.html',
  styleUrl: './restaurant-create-and-edit.component.css',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIcon,
    NgIf
  ]
})
export class RestaurantCreateAndEditComponent extends BaseFormComponent {
  @Input() restaurant!: Restaurant;
  @Input() editMode: boolean = false;

  @Output() restaurantAddRequested = new EventEmitter<Restaurant>();
  @Output() restaurantUpdateRequested = new EventEmitter<Restaurant>();
  @Output() cancelRequested = new EventEmitter<void>();
  @ViewChild('restaurantForm', { static: false }) protected restaurantForm!: NgForm;

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService, private router: Router) {
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
    if (!this.isValid()) return;

    if (this.editMode) {
      this.restaurantService.update(this.restaurant.id, this.restaurant).subscribe(() => {
        this.router.navigate(['/chef/restaurants']);
      });
    } else {
      this.restaurant.ownerId = 1;
      this.restaurant.dishes = [];
      this.restaurantService.create(this.restaurant).subscribe(() => {
        this.router.navigate(['/chef/restaurants']);
      });
    }
    this.resetFormState();
  }

  protected onCancel(): void {
    this.cancelRequested.emit();
    this.router.navigate(['/chef/restaurants']);
  }

  protected onDelete(): void {
    if (!this.restaurant.id) return;

    if (confirm('¿Estás seguro de que deseas eliminar este restaurante?')) {
      this.restaurantService.delete(this.restaurant.id).subscribe(() => {
        this.router.navigate(['/chef/restaurants']);
      });
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // Edit mode
      this.editMode = true;
      this.restaurantService.getById(+id).subscribe((res) => {
        this.restaurant = res;
      });
    } else {
      // Create mode
      this.editMode = false;
      this.restaurant = new Restaurant({});
    }
  }
}
