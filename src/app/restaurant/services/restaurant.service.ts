import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BaseService} from '../../shared/services/base.service';
import {Restaurant} from '../model/restaurant.entity';

const restaurantResourceEndpointPath= environment.restaurantEndpointPath;

@Injectable({
  providedIn: 'root'
})
export class RestaurantService extends BaseService<Restaurant>{

  constructor() {
    super();
    this.resourceEndpoint = restaurantResourceEndpointPath;
  }
}
