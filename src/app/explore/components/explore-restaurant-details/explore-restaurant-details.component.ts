import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../../restaurant/services/restaurant.service';
import { Restaurant } from '../../../restaurant/model/restaurant.entity';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DishCardComponent } from '../../../restaurant/components/dish-card/dish-card.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-explore-restaurant-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    DishCardComponent],
  templateUrl: './explore-restaurant-details.component.html',
  styleUrls: ['./explore-restaurant-details.component.css']
})
export class ExploreRestaurantDetailsComponent implements OnInit {
  restaurant: Restaurant = new Restaurant({});

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurantService.getById(id).subscribe((res) => {
      this.restaurant = res;
    });
  }
}
