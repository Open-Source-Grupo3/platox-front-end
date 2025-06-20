export class Favorite {
  id: number;
  userId: number;
  restaurantId: number;

  constructor(favorite:{id?: number, userId?: number, restaurantId?: number}) {
    this.id = favorite.id || 0;
    this.userId = favorite.userId || 0;
    this.restaurantId = favorite.restaurantId || 0;
  }
}
