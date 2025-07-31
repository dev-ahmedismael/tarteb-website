import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
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
}
