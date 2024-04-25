import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-failed',
  standalone: true,
  imports: [],
  templateUrl: './failed.component.html'
})
export class FailedComponent {
  @Input() public isActive = false;
}
