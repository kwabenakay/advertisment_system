import { Component } from '@angular/core';
import { CampaignTableComponent } from '@campaign/campaign-table/campaign-table.component';
import { HomeTileComponent } from '@home/home-tile/home-tile.component';
import { AddLogoComponent } from '@icons/add-logo/add-logo.component';
import { ButtonComponent } from '@shared/button/button.component';
import { SearchComponent } from '@shared/search/search.component';

@Component({
  selector: 'app-campaign-history',
  standalone: true,
  templateUrl: './campaign-history.component.html',
  imports: [
    SearchComponent,
    HomeTileComponent,
    ButtonComponent,
    AddLogoComponent,
    CampaignTableComponent,
  ],
})
export class CampaignHistoryComponent {}
