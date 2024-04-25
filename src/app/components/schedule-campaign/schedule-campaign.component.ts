import { Component } from '@angular/core';
import { SearchComponent } from "../shared/search/search.component";
import { ButtonComponent } from "../shared/button/button.component";
import { AddLogoComponent } from "../partial/add-logo/add-logo.component";
import { CampaignTileComponent } from '../campaign-tile/campaign-tile.component';

@Component({
    selector: 'app-schedule-campaign',
    standalone: true,
    templateUrl: './schedule-campaign.component.html',
    imports: [SearchComponent, ButtonComponent, AddLogoComponent, CampaignTileComponent]
})
export class ScheduleCampaignComponent {

}
