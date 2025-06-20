import {Component, OnInit} from '@angular/core';
import {Restaurant} from '../../../restaurant/model/restaurant.entity';
import {FavoriteService} from '../../services/favorite.service';
import {RestaurantService} from '../../../restaurant/services/restaurant.service';
import {UserService} from '../../../profile/services/user.service';
import {MatCardModule} from '@angular/material/card';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {NgForOf, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-favorite-list',
  imports: [
    MatCardModule,
    RouterLink,
    MatButton,
    MatIcon,
    NgIf,
    NgForOf
  ],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.css'
})
export class FavoriteListComponent implements OnInit {
  favorites: Restaurant[] = [];

  constructor(
    private favoriteService: FavoriteService,
    private restaurantService: RestaurantService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = this.userService.getUserId();

    this.favoriteService.getByUser(userId).subscribe(favs => {
      const ids = favs.map(f => f.restaurantId);
      this.restaurantService.getAll().subscribe(all => {
        this.favorites = all.filter(r => ids.includes(r.id));
      });
    });
  }
}
