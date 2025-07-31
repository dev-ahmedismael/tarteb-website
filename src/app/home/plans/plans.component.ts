import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  imports: [],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansComponent {
  plans = [
    {
      id: 1,
      title: 'الباقة الأساسية',
      desc: 'من 5 إلى 10 موظفين',
      price: '7000',
    },
    {
      id: 2,
      title: 'الباقة المتقدمة',
      desc: 'من 11 إلى 15 موظف',
      price: '13000',
    },
  ];
}
