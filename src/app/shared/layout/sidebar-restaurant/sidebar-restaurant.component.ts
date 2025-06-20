import {Component, OnInit} from '@angular/core';
import {MatNavList} from '@angular/material/list';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-restaurant',
  standalone: true,
  templateUrl: './sidebar-restaurant.component.html',
  styleUrls: ['./sidebar-restaurant.component.css'],
  imports: [
    MatNavList,
    RouterLink,
    RouterLinkActive,
    NgForOf,
    NgIf,
    MatIcon,
  ]
})
export class SidebarRestaurantComponent implements OnInit {
  menuItems: any[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {icon: 'home', label: 'Home', route: '/chef/home'},
      {icon: 'person', label: 'Profile', route: '/chef/profile'},
      /*{icon: 'map', label: 'Map', route: '/chef/restaurant-locator'},*/
      {icon: 'restaurant', label: 'My Restaurants', route: '/chef/restaurants'},
      {icon: 'logout', label: 'Log Out', action: () => this.logout()}
    ];
  }

  logout(): void {
    localStorage.clear();
    location.href = '/login';
  }
}
