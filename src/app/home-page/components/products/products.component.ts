import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { first } from "rxjs";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor( private translate : TranslateService) {
  }

  productCards = [
    {
      'image': 'assets/images/01.png',
      'text': 'products.i01'
    },
    {
      'image': 'assets/images/02.png',
      'text': 'products.i02'
    },
    {
      'image': 'assets/images/03.png',
      'text': 'products.i03'
    }
  ]
  protected readonly first = first;
}
