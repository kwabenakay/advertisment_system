import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-port-logo',
  standalone: true,
  imports: [],
  templateUrl: './port-logo.component.html',
})
export class PortLogoComponent {
  @Input() type: 'import' | 'export' = 'export';
}
