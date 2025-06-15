import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatCard, MatCardContent, MatCardImage, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    NgIf,
    MatCardImage,
    MatCardContent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userRole: 'diner' | 'chef' = 'diner';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const pathRole = this.route.snapshot.routeConfig?.path?.split('/')[0];
    const stored = localStorage.getItem('userRole');

    this.userRole = (pathRole as 'diner' | 'chef') || (stored as 'diner' | 'chef') || 'diner';
  }
}
