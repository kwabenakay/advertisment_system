import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AlertService } from '@shared/alert-service/alert.service';
import { Alert } from '@app/app.interface';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {
  private alertService = inject(AlertService);
  public alert$!: Observable<Alert>;
  ngOnInit(): void {
    this.alert$ = this.alertService.alert;
  }
}
