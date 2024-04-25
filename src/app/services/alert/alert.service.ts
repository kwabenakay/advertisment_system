import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, Type } from '../../app.interface';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSubject = new Subject<Alert>();
  private alertObservable = this.alertSubject.asObservable();

 

  get alert() {
    return this.alertObservable;
  }

  triggerAlert(type: Type, message: string, delay = 1500) {
    this.alertSubject.next({ type, message });
    setTimeout(() => {
      this.alertSubject.next({ type, message: '' });
    }, delay);
  }

 
}
