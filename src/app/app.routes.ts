import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},

  {path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), title: 'الرئيسية' },

  {path: 'about', loadComponent: ()=> import('./about/about.component').then(m => m.AboutComponent), title: 'من نحن' },

  {path: 'services', loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent), title: 'خدماتنا' },

  {path: 'consultation-booking', loadComponent: () => import('./consultation-booking/consultation-booking.component').then(m => m.ConsultationBookingComponent), title: 'طلب استشارة' },

  {
    path:'contact-us', loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent), title: 'تواصل معنا'
  }
];
