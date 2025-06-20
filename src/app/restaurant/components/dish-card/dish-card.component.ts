import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Dish } from '../../model/dish.entity';
import {MatFormField, MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-dish-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatFormField, MatInput, FormsModule, MatSelect, MatOption],
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css']
})
export class DishCardComponent {
  @Input() dish!: Dish;
  @Output() deleteRequested = new EventEmitter<number>();
  @Output() editRequested = new EventEmitter<Dish>();
  @Input() editable: boolean = false;

  deleteDish(): void {
    this.deleteRequested.emit(this.dish.id);
  }

  isEditMode = false;
  editedDish: Dish = new Dish({});

  toggleEdit(): void {
    this.isEditMode = true;
    this.editedDish = new Dish({ ...this.dish });
  }

  saveEdit(): void {
    this.editRequested.emit(this.editedDish);
    this.isEditMode = false;
  }

  cancelEdit(): void {
    this.isEditMode = false;
  }

}
