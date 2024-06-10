import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showFloatingImage = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 120) {
      this.showFloatingImage = false;
    } else {
      this.showFloatingImage = true;
    }
  }
}
