import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../model/restaurant.entity';
import { UserService} from '../../../profile/services/user.service';
import {MatHint} from '@angular/material/input';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatHint
  ],
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(
    private restaurantService: RestaurantService,
    private userService: UserService,
    private router: Router
  ) {}

  plan: string = '';
  maxReached = false;

  ngOnInit(): void {
    const userId = this.userService.getUserId();
    this.plan = this.userService.getCurrentUser()?.plan || '';

    this.restaurantService.getAll().subscribe(data => {
      this.restaurants = data.filter(r => r.ownerId === userId);
      this.maxReached = this.plan === 'básico' && this.restaurants.length >= 1;
    });
  }

  goToCreate(): void {
    this.router.navigate(['/chef/restaurants/create']);
  }

  goToDetails(id: number): void {
    this.router.navigate(['/chef/restaurants', id]);
  }
}
