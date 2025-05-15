import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {RouterLink} from '@angular/router';
import {MatAnchor} from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbar,
    LanguageSwitcherComponent,
    RouterLink,
    MatAnchor
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  protected options = [
    {path: '/home', title: 'Home'},
    {path: '/posts', title: 'Posts'},
    {path: '/profile', title: 'Profile'},
  ]
}
