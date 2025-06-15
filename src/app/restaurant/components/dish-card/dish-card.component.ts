import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Dish } from '../../model/dish.entity';

@Component({
  selector: 'app-dish-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css']
})
export class DishCardComponent {
  @Input() dish!: Dish;
  @Output() deleteRequested = new EventEmitter<number>();

  deleteDish(): void {
    this.deleteRequested.emit(this.dish.id);
  }
}
