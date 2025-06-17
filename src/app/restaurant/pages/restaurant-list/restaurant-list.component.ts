import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../model/restaurant.entity';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  userId = 1; // Simulación de usuario autenticado

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.getAll().subscribe(data => {
      this.restaurants = data.filter(r => r.ownerId === this.userId);
    });
  }

  goToCreate(): void {
    window.location.href = '/chef/restaurants/create';
  }

  goToDetails(id: number): void {
    window.location.href = `/chef/restaurants/${id}`;
  }
}
