import { Component, Inject } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    if (this.language === null) {
      localStorage.setItem('language', 'es');
    }

    const savedLang = this.language || 'es';
    translate.setDefaultLang(savedLang);
    translate.use(savedLang);

    translate.setDefaultLang(savedLang);
    translate.use(savedLang);
  }

  useTranslate(language: string) {
    this.document.documentElement.lang = language;
    this.translate.use(language);
    localStorage.setItem('language', language)
  }

  get language() {
    return localStorage.getItem('language');
  }
}
