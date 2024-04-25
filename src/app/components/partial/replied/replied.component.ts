import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-replied',
  standalone: true,
  imports: [],
  templateUrl: './replied.component.html'
})
export class RepliedComponent {
  @Input() public isActive = false;
}
