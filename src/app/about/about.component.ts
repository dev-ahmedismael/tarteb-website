import { Component } from '@angular/core';
import {AboutHeaderComponent} from './about-header/about-header.component';

@Component({
  selector: 'app-about',
  imports: [
    AboutHeaderComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
