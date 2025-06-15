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
      {icon: 'home', label: 'Inicio', route: '/chef/home'},
      {icon: 'person', label: 'Perfil', route: '/chef/profile'},
      {icon: 'map', label: 'Mapa', route: '/chef/restaurant-locator'},
      {icon: 'logout', label: 'Cerrar sesión', action: () => this.logout()}
    ];
  }

  logout(): void {
    localStorage.clear();
    location.href = '/login';
  }
}
