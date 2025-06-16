import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';

import { UserService } from '../../services/user.service';
import { User } from '../../model/user.entity';
import { ProfileEditComponent } from '../../components/profile-edit/profile-edit.component';
import {MatIconButton} from '@angular/material/button';

/**
 * Component for managing user profile.
 * Handles profile viewing, editing and saving using Angular Material table and forms.
 */
@Component({
  selector: 'app-profile-page',
  standalone: true,
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
  imports: [
    ProfileEditComponent,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatSort,
    NgClass,
    MatIconButton
  ]
})
export class ProfilePageComponent implements OnInit, AfterViewInit {
  protected userData!: User;
  protected columnsToDisplay: string[] = ['id', 'fullName', 'email', 'restaurant', 'actions'];
  protected dataSource!: MatTableDataSource<any>;
  protected editMode = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private userService: UserService = inject(UserService);

  constructor() {
    this.userData = new User({});
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getUser();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  protected onEditItem(item: User): void {
    this.editMode = true;
    this.userData = item;
  }

  protected onCancelRequested(): void {
    this.resetEditState();
    this.getUser();
  }

  protected onUserUpdateRequested(item: User): void {
    this.userData = item;
    this.updateUser();
    this.resetEditState();
  }

  private getUser(): void {
    const userId = 1; // Temporal: en el futuro se puede leer desde un AuthService
    this.userService.getById(userId).subscribe((response: User) => {
      this.dataSource.data = [response];
    });
  }

  private updateUser(): void {
    this.userService.update(this.userData.id, this.userData).subscribe((updatedUser: User) => {
      this.dataSource.data = [updatedUser];
    });
  }

  private resetEditState(): void {
    this.editMode = false;
    this.userData = new User({});
  }
}
