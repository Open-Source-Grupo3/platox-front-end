import { Component, OnInit } from '@angular/core';
import {MatNavList} from '@angular/material/list';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-restaurant',
  templateUrl: './sidebar-restaurant.component.html',
  styleUrls: ['./sidebar-restaurant.component.css'],
  imports: [
    MatNavList,
    RouterLink,
    NgForOf,
    RouterLinkActive,
    NgIf,
    MatIcon,
  ],
  standalone: true
})
export class SidebarRestaurantComponent implements OnInit {
  menuItems = [
    { icon: 'home', label: 'Inicio', route: '/home' },
    { icon: 'person', label: 'Perfil', route: '/profile' },
    { icon: 'map', label: 'Mapa', route: '/restaurant-locator' },
    { icon: 'settings', label: 'Configuración', route: '/settings' },
    { icon: 'logout', label: 'Cerrar sesión', action: this.logout.bind(this) }
  ];

  ngOnInit(): void {}

  logout(): void {
    localStorage.clear();
    location.href = '/login';
  }
}
