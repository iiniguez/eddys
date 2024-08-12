import { Component } from '@angular/core';

@Component({
  selector: 'contact-section',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  informacion = {
    "email": 'hola@elzarapeimports.com',
    "address": '1216 E 27th St, Houston, TX 77009, Estados Unidos',
  }
}
