import { Component } from '@angular/core';
import {NgIf, TitleCasePipe} from '@angular/common';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatCard, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  imports: [
    NgIf,
    MatButtonToggle,
    MatButtonToggleGroup,
    TitleCasePipe,
    MatCardTitle,
    MatCard
  ],
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  userRole: 'diner' | 'chef' | null = null;

  selectRole(role: 'diner' | 'chef') {
    this.userRole = role;
    localStorage.setItem('userRole', role);
  }

  canCreatePost(): boolean {
    return this.userRole === 'chef';
  }
}
