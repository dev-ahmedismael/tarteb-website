import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  pages = [
    {id:1, title: 'الرئيسية', route: '/home'},
    {id:2, title: 'من نحن', route: '/about'},
    {id:3, title: 'خدماتنا', route: '/services'},
    {id:4, title: 'طلب استشارة', route: '/consultation-booking'},
    {id:5, title: 'تواصل معنا', route: '/contact-us'},
  ]

}
