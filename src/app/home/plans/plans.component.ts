import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { Toast } from 'primeng/toast';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-plans',
  imports: [ButtonModule, Toast, Dialog, ReactiveFormsModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
  providers: [MessageService],
})
export class PlansComponent {
  plans = [
    {
      id: 1,
      title: 'الباقة الفضية',
      desc: 'من 1 إلى 10 موظفين',
      subject: 'طلب شراء الباقة الفضية',
    },
    {
      id: 2,
      title: 'الباقة الذهبية',
      desc: 'من 11 إلى 25 موظف',
      subject: 'طلب شراء الباقة الذهبية',
    },
    {
      id: 3,
      title: 'الباقة الماسية',
      desc: 'من 11 إلى 25 موظف',
      subject: 'طلب شراء الباقة الماسية',
    },
  ];

  services = [
    {
      id: 1,
      title: 'ادارة شؤون الموظفين ( رواتب- اجازات- الحضور والانصرف)',
      icon: 'pi pi-users',
    },
    {
      id: 2,
      title:
        'ادارة المنصات الحكومية ( التامينات الاجتماعية- قوى- مقيم- مدد الاجور- الاقامات - تاشيرات العمل)',
      icon: 'pi pi-file-check',
    },
    { id: 3, title: 'التامين الطبي للموظفين', icon: 'pi pi-verified' },
    {
      id: 4,
      title: 'إعداد وتحديث السياسات والإجراءات الداخلية اللوائح التنظيمية ',
      icon: 'pi pi-building-columns',
    },
    {
      id: 5,
      title:
        'تأهيل المؤسسات والشركات و إعداد الهياكل التنظيمية والوصف الوظيفي وسلم الرواتب والأجور.',
      icon: 'pi pi-briefcase',
    },
    {
      id: 6,
      title: 'صياغة عقود العمل حسب نظام العمل السعودي',
      icon: 'pi pi-compass',
    },
    { id: 7, title: 'إعداد ومتابعة مؤشرات الأداء KPI', icon: 'pi pi-bolt' },
    { id: 8, title: 'تقييم اداء الموظفين', icon: 'pi pi-chart-line' },
    { id: 9, title: 'استشارات قانونية وإدارية مستمرة', icon: 'pi pi-bell' },
  ];

  visible: boolean = false;

  selectedSubject: string = '';

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private apiService: ApiService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  showDialog(subject: string) {
    this.selectedSubject = subject;
    this.visible = true;
  }

  onSubmit() {
    this.form.patchValue({
      subject: this.selectedSubject,
      message: this.selectedSubject,
    });

    this.apiService.store('consultations', this.form.value).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'تم استلام طلبك بنجاح وسيتم الرد في خلال 24 ساعة.',
        });
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary:
            'تعذر إرسال طلبك في الوقت الحالي، يرجى المحاولة في وقت لاحق.',
        });
      },
    });
  }
}
