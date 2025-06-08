import { Component, OnInit } from '@angular/core';
import {MatCard, MatCardContent, MatCardImage, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    NgIf,
    MatCardImage,
    MatCardContent
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userRole: 'diner' | 'restaurant' = 'diner'; // default

  ngOnInit(): void {
    const stored = localStorage.getItem('userRole');
    if (stored === 'restaurant' || stored === 'diner') {
      this.userRole = stored;
    }
  }
}
