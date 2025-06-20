  import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import {UserService} from '../../../profile/services/user.service';
import {MatIcon} from '@angular/material/icon';
  import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatIcon,
    NgIf,
  ]
})
export class LoginComponent {

  username = '';
  password = '';
  error = '';

  constructor(private userService: UserService, private router: Router) {
  }

  login(): void {
    this.userService.login(this.username, this.password).subscribe(success => {
      if (success) {
        const role = this.userService.getRole();
        if (role === 'chef') {
          this.router.navigate(['/chef/home']);
        } else {
          this.router.navigate(['/diner/home']);
        }
      } else {
        this.error = 'Credenciales incorrectas';
      }
    });
  }
}
