import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  protected readonly localStorage = localStorage;

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language') || 'es';

    translate.setDefaultLang(savedLang);
    translate.use(savedLang);
  }

  useTranslate(language: string) {

    this.translate.use(language);
    localStorage.setItem('language', language)
  }

  get language() {
    return localStorage.getItem('language' || 'es');
  }
}
