import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../../restaurant/services/restaurant.service';
import { Restaurant } from '../../../restaurant/model/restaurant.entity';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-explore-restaurant-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './explore-restaurant-list.component.html',
  styleUrls: ['./explore-restaurant-list.component.css']
})
export class ExploreRestaurantListComponent {
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {
    this.restaurantService.getAll().subscribe(res => {
      this.restaurants = res;
    });
  }
}
