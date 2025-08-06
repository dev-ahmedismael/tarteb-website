import { Component } from '@angular/core';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { RouterLink } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { PlansComponent } from './plans/plans.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    HomeHeaderComponent,
    AboutUsComponent,
    RouterLink,
    ServicesComponent,
    PlansComponent,
    NgOptimizedImage,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
