import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {SidebarDinerComponent} from '../sidebar-diner/sidebar-diner.component';
import {SidebarRestaurantComponent} from '../sidebar-restaurant/sidebar-restaurant.component';
import {RouterOutlet} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarDinerComponent,
    SidebarRestaurantComponent,
    NgIf
  ],
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  userRole: 'diner' | 'chef' = 'diner';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Detects the actual path
    this.updateRoleFromPath(this.router.url);

    // Listen to navigation changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateRoleFromPath(event.urlAfterRedirects);
      });
  }

  private updateRoleFromPath(url: string) {
    if (url.startsWith('/chef')) {
      this.userRole = 'chef';
    } else if (url.startsWith('/diner')) {
      this.userRole = 'diner';
    }
  }
}
