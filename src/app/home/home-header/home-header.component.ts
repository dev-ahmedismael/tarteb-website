import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home-header',
  imports: [NgOptimizedImage],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {
  scrollByScreenHeight(): void {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }
}
