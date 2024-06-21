import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campaign-tile',
  standalone: true,
  imports: [],
  templateUrl: './campaign-tile.component.html',
})
export class CampaignTileComponent {
  @Input({required:true}) public title='Campaign Schedule'
  @Input({required:true}) public number=0
}
