import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrandBarComponent } from './brand-bar/brand-bar.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { ShreddedPaperComponent } from './shredded-paper/shredded-paper.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { TranslateModule } from "@ngx-translate/core";
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from "@angular/forms";
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BrandBarComponent,
    NavbarMenuComponent,
    ShreddedPaperComponent,
    LanguageSelectorComponent,
    ContactFormComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    LanguageSelectorComponent,
    ContactFormComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ]
})
export class SharedModule { }
