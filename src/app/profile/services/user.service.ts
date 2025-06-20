import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../model/user.entity';

@Injectable({providedIn: 'root'})
export class UserService {
  private baseUrl = `${environment.serverBaseUrl}/users`;
  private currentUser: any = null;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.baseUrl}?username=${username}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          this.currentUser = users[0];
          localStorage.setItem('user', JSON.stringify(this.currentUser));
          return true;
        }
        return false;
      })
    );
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
  }

  setCurrentUser(user: User): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser(): User {
    const stored = localStorage.getItem('user');
    return stored ? new User(JSON.parse(stored)) : new User({});
  }


  getRole(): string {
    return this.getCurrentUser()?.role || '';
  }

  getUserId(): number {
    return this.getCurrentUser()?.id || 0;
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  update(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, user);
  }
}
