import { Component } from '@angular/core';
import { CloseLogoComponent } from '../partial/close-logo/close-logo.component';

@Component({
  selector: 'app-table-tiles',
  standalone: true,
  imports: [CloseLogoComponent],
  templateUrl: './table-tiles.component.html',
})
export class TableTilesComponent {}
