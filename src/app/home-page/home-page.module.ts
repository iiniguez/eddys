import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from "../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { MosaicComponent } from './components/mosaic/mosaic.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardLgImage } from "@angular/material/card";

@NgModule({
  declarations: [
    HomeComponent,
    MosaicComponent,
    AboutComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    NgOptimizedImage,
    MatCardHeader,
    MatCardContent,
    MatCardImage,
    MatCard,
    MatCardLgImage
  ],
  exports: [
    HomeComponent
  ]
})
export class HomePageModule { }
