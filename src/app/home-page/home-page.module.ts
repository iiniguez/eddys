import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from "../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { MosaicComponent } from './components/mosaic/mosaic.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardLgImage } from "@angular/material/card";
import { VideoComponent } from './components/video/video.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatGridList, MatGridTile } from "@angular/material/grid-list";
import { MatFormField } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { LocationComponent } from './components/location/location.component';

@NgModule({
  declarations: [
    HomeComponent,
    MosaicComponent,
    AboutComponent,
    ProductsComponent,
    VideoComponent,
    ContactComponent,
    LocationComponent
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
    MatCardLgImage,
    MatGridList,
    MatGridTile,
    MatFormField,
    MatInput
  ],
  exports: [
    HomeComponent
  ]
})
export class HomePageModule { }
