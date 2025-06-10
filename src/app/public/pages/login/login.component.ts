import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

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
  ]
})
export class LoginComponent {
  email = '';
  password = '';
  role: 'diner' | 'chef' = 'diner';

  constructor(private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Guardar role simulado
    localStorage.setItem('userRole', this.role);

    // Redirigir según el rol
    this.router.navigate([`/${this.role}/home`]);
  }
}
