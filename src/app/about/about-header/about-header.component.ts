import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-about-header',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './about-header.component.html',
  styleUrl: './about-header.component.scss'
})
export class AboutHeaderComponent {

}
