export class Dish {
  id: number;
  name: string;
  price: number;
  image: string; // URL o base64
  available: string;

  constructor(dish: {id?: number, name?: string, price?: number, image?: string, available?: string}) {
    this.id = dish.id || 0;
    this.name = dish.name || '';
    this.price = dish.price || 0;
    this.image = dish.image || '';
    this.available = dish.available || '';
  }
}
