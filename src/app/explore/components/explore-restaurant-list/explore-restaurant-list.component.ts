import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../../restaurant/services/restaurant.service';
import { Restaurant } from '../../../restaurant/model/restaurant.entity';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../profile/services/user.service';
import { FavoriteService} from '../../../favorites/services/favorite.service';
import { MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-explore-restaurant-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule, MatChipsModule, MatIconModule],
  templateUrl: './explore-restaurant-list.component.html',
  styleUrls: ['./explore-restaurant-list.component.css']
})
export class ExploreRestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  premiumIds: number[] = [];
  favorites: number[] = [];
  userId: number;

  constructor(
    private userService: UserService,
    private restaurantService: RestaurantService,
    private favoriteService: FavoriteService
  ) {
    this.userId = this.userService.getUserId();
  }

  ngOnInit(): void {
    this.restaurantService.getAll().subscribe(rests => {
      this.restaurants = rests;

      const ownerIds = [...new Set(rests.map(r => r.ownerId))];

      ownerIds.forEach(id => {
        this.userService.getById(id).subscribe(user => {
          if (user.plan === 'premium') {
            this.premiumIds.push(id);
          }
        });
      });

      this.favoriteService.getByUser(this.userId).subscribe(favs => {
        this.favorites = favs.map(f => f.restaurantId);
      });
    });
  }

  isPremiumRestaurant(r: Restaurant): boolean {
    return this.premiumIds.includes(r.ownerId);
  }

  isFavorite(id: number): boolean {
    return this.favorites.includes(id);
  }

  toggleFavorite(r: Restaurant): void {
    if (this.isFavorite(r.id)) {
      this.favoriteService.getByUser(this.userId).subscribe(favs => {
        const fav = favs.find(f => f.restaurantId === r.id);
        if (fav) {
          this.favoriteService.remove(fav.id).subscribe(() => {
            this.favorites = this.favorites.filter(fid => fid !== r.id);
          });
        }
      });
    } else {
      this.favoriteService.add(this.userId, r.id).subscribe(() => {
        this.favorites.push(r.id);
      });
    }
  }
}
