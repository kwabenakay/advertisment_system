import { Component, OnInit, inject } from '@angular/core';
import { AlertService } from '../../services/alert/alert.service';
import { Observable } from 'rxjs';
import { Alert } from '../../app.interface';
import { CommonModule } from '@angular/common';

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
