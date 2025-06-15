import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../model/restaurant.entity';
import { Dish } from '../../model/dish.entity';
import {DishCardComponent} from '../dish-card/dish-card.component';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    DishCardComponent
  ]
})
export class RestaurantDetailsComponent implements OnInit {
  restaurant!: Restaurant;
  newDish: Dish = new Dish({});

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurantService.getById(id).subscribe(res => {
      this.restaurant = res;
    });
  }

  addDish(): void {
    if (
      this.newDish.name &&
      this.newDish.price &&
      this.newDish.image &&
      this.newDish.available
    ) {
      this.newDish.id = Date.now(); // ID temporal único
      this.restaurant.dishes.push(this.newDish);
      this.restaurantService.update(this.restaurant.id, this.restaurant).subscribe(() => {
        this.newDish = new Dish({});
      });
    }
  }

  deleteDish(dishId: number): void {
    this.restaurant.dishes = this.restaurant.dishes.filter(d => d.id !== dishId);

    this.restaurantService.update(this.restaurant.id, this.restaurant).subscribe(() => {
      this.snackBar.open('Plato eliminado', 'Cerrar', { duration: 3000 });
    });
  }

}
