import { Component, OnInit } from '@angular/core';
import {MatNavList} from '@angular/material/list';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-diner',
  templateUrl: './sidebar-diner.component.html',
  styleUrls: ['./sidebar-diner.component.css'],
  imports: [
    MatNavList,
    RouterLink,
    NgForOf,
    NgIf,
    MatIcon,
    RouterLinkActive
  ],
  standalone: true
})
export class SidebarDinerComponent implements OnInit {
  menuItems = [
    { icon: 'home', label: 'Inicio', route: '/home' },
    { icon: 'favorite', label: 'Favoritos', route: '/favorites' },
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
