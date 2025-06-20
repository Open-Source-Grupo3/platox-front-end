import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import {UserService} from '../../../profile/services/user.service';
import {MatButton} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatList, MatListItem} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    MatCardModule,
    MatButton,
    MatList,
    MatListItem,
    MatIcon
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role: string = '';
  fullName: string = '';
  plan: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const user = this.userService.getCurrentUser();
    this.role = user?.role || '';
    this.fullName = user?.fullName || user?.username || 'User';
    this.plan = user?.plan || '';
  }
}
