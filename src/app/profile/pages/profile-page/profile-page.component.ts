import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.entity';
import { ProfileEditComponent } from '../../components/profile-edit/profile-edit.component';
import { ProfileViewComponent } from '../../components/profile-view/profile-view.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ProfileEditComponent,
    ProfileViewComponent
  ],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  user!: User;
  editMode = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const id = this.userService.getUserId();
    this.userService.getById(id).subscribe(user => this.user = user);
  }

  toggleEdit(): void {
    this.editMode = !this.editMode;
  }

  onUserUpdateRequested(updatedUser: User): void {
    this.userService.update(updatedUser.id, updatedUser).subscribe((res) => {
      this.user = res;
      this.editMode = false;
    });
  }

  onCancelRequested(): void {
    this.editMode = false;
  }
}
