import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent {
  selectedLang: string;

  constructor(private translate: TranslateService) {
    this.selectedLang = localStorage.getItem('lang') || 'en';
    this.translate.use(this.selectedLang);
  }

  changeLang(lang: string): void {
    this.selectedLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
