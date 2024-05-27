import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrandBarComponent } from './brand-bar/brand-bar.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { ShreddedPaperComponent } from './shredded-paper/shredded-paper.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { TranslateModule } from "@ngx-translate/core";



@NgModule({
  declarations: [
    HeaderComponent,
    BrandBarComponent,
    NavbarMenuComponent,
    ShreddedPaperComponent,
    LanguageSelectorComponent
  ],
  exports: [
    HeaderComponent,
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class SharedModule { }
