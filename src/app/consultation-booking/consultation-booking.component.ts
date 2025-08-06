import { Component } from '@angular/core';
import { Toast } from 'primeng/toast';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-consultation-booking',
  imports: [ReactiveFormsModule, Toast],
  templateUrl: './consultation-booking.component.html',
  styleUrl: './consultation-booking.component.scss',
  providers: [MessageService],
})
export class ConsultationBookingComponent {
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

  onSubmit() {
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
