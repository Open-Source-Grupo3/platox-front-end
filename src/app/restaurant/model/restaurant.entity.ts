import {Dish} from './dish.entity';

export class Restaurant {
  id: number;
  ownerId: number; // ID del usuario que creó el restaurante
  name: string;
  description: string;
  address: string;
  foodType: string; // Ej: 'Marino', 'Criollo', 'Fast Food'
  dishes: Dish[];// Lista de platos asociados al restaurante

  constructor(restaurant: {id?: number, ownerId?: number, name?: string, description?: string, address?: string, foodType?: string, dishes?: Dish[]}) {
    this.id = restaurant.id || 0;
    this.ownerId = restaurant.ownerId || 0;
    this.name = restaurant.name || '';
    this.description = restaurant.description || '';
    this.address = restaurant.address || '';
    this.foodType = restaurant.foodType || '';
    this.dishes = restaurant.dishes || [];
  }
}
