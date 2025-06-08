import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {NgIf} from '@angular/common';
import {SidebarDinerComponent} from './shared/layout/sidebar-diner/sidebar-diner.component';
import {SidebarRestaurantComponent} from './shared/layout/sidebar-restaurant/sidebar-restaurant.component';

@Component({
  selector: 'app-root',
  imports: [NgIf, SidebarDinerComponent, SidebarRestaurantComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'front-end-platox';

  constructor(private translate: TranslateService, public router: Router) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  userRole: 'diner' | 'restaurant' = 'diner';

  ngOnInit(): void {
    const stored = localStorage.getItem('userRole');
    this.userRole = stored === 'restaurant' ? 'restaurant' : 'diner';
  }
}
