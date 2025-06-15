import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../model/user.entity';
import {BaseFormComponent} from '../../../shared/components/base-form.component';

/**
 * Component for editing user profile information.
 */
@Component({
  selector: 'app-profile-edit',
  standalone: true,
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css',
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class ProfileEditComponent extends  BaseFormComponent{
  /** User being edited */
  @Input() user!: User;

  /** Whether we are in edit mode */
  @Input() editMode: boolean = false;

  /** Event emitted when a profile update is requested */
  @Output() protected userUpdateRequested = new EventEmitter<User>();

  /** Event emitted when cancel is requested */
  @Output() protected cancelRequested = new EventEmitter<void>();

  /** Reference to the profile form */
  @ViewChild('profileForm', { static: false }) protected profileForm!: NgForm;

  constructor() {
    super();
    this.user = new User({});
  }

  private resetEditState(): void {
    this.user = new User({});
    this.editMode = false;
    this.profileForm.reset();
  }

  private isValid = () => this.profileForm.valid;
  protected isEditMode = (): boolean => this.editMode;

  protected onSubmit(): void {
    if (this.isValid()) {
      this.userUpdateRequested.emit(this.user);
      this.resetEditState();
    } else {
      console.error('Invalid form data');
    }
  }

  protected onCancel(): void {
    this.cancelRequested.emit();
    this.resetEditState();
  }
}
