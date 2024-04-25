import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [],
  templateUrl: './read.component.html',
})
export class ReadComponent {
  @Input() public isActive = false;
}
