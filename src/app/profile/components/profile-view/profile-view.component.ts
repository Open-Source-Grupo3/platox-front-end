import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {User} from '../../model/user.entity';
import {MatButton} from '@angular/material/button';
import {UserService} from '../../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButton],
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent {
  @Input() user!: User;

  private userService = inject(UserService);
  private snackBar = inject(MatSnackBar);

  constructor(private router: Router) { }

  upgrade(): void {
    const updated: User = { ...this.user, plan: 'premium' };

    this.userService.update(updated.id, updated).subscribe((res) => {
      this.userService.setCurrentUser(res);
      this.user = new User(res);
      this.snackBar.open('¡Actualizaste a Premium con éxito! 🎉 Por favor, inicia sesión nuevamente.', 'Cerrar',
        { duration: 3000 });
    });

    setTimeout(() => {
      localStorage.clear();
      this.router.navigate(['/login']);
    }, 3000);
  }
}
