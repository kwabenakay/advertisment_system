import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sent',
  standalone: true,
  imports: [],
  templateUrl: './sent.component.html',
})
export class SentComponent {
  @Input() public isActive = false;
}
