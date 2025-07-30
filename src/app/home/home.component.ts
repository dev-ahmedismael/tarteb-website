import { Component } from '@angular/core';
import {HomeHeaderComponent} from './home-header/home-header.component';
import {AboutUsComponent} from '../../components/about-us/about-us.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    HomeHeaderComponent,
    AboutUsComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
