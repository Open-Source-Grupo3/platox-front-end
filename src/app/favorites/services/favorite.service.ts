import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private baseUrl = `${environment.serverBaseUrl}/favorites`;

  constructor(private http: HttpClient) {}

  getByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?userId=${userId}`);
  }

  add(userId: number, restaurantId: number): Observable<any> {
    return this.http.post(this.baseUrl, { userId, restaurantId });
  }

  remove(favId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${favId}`);
  }
}
