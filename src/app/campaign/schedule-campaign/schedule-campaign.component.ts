import { Component } from '@angular/core';
import { CampaignTileComponent } from '../campaign-tile/campaign-tile.component';
import { AddLogoComponent } from '@icons/add-logo/add-logo.component';
import { ButtonComponent } from '@shared/button/button.component';
import { SearchComponent } from '@shared/search/search.component';

@Component({
  selector: 'app-schedule-campaign',
  standalone: true,
  templateUrl: './schedule-campaign.component.html',
  imports: [
    SearchComponent,
    ButtonComponent,
    AddLogoComponent,
    CampaignTileComponent,
  ],
})
export class ScheduleCampaignComponent {}
