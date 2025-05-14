import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {HeaderComponent} from './public/components/header/header.component';
import {FooterComponent} from './public/components/footer/footer.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatToolbarRow, HeaderComponent, FooterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end-platox';

  constructor(private translate: TranslateService, public router: Router) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  shouldShowToolbar(): boolean {
    return !this.router.url.includes('/login');
  }
}
