import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar-diner',
  standalone: true,
  imports: [RouterModule, MatListModule, MatIconModule, NgFor, NgIf],
  templateUrl: './sidebar-diner.component.html',
  styleUrls: ['./sidebar-diner.component.css']
})
export class SidebarDinerComponent {
  menuItems = [
    { label: 'Home', icon: 'home', route: '/diner/home' },
    { label: 'Favorites', icon: 'favorite', route: '/diner/favorites' },
    { label: 'Profile', icon: 'person', route: '/diner/profile' },
    { label: 'Map', icon: 'map', route: '/diner/map' },
    {
      label: 'Logout',
      icon: 'logout',
      action: () => {
        localStorage.clear();
        location.href = '/login';
      }
    }
  ];
}
