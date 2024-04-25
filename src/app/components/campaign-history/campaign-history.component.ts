import { Component } from '@angular/core';
import { SearchComponent } from "../shared/search/search.component";
import { HomeTileComponent } from "../home-tile/home-tile.component";
import { ButtonComponent } from "../shared/button/button.component";
import { AddLogoComponent } from "../partial/add-logo/add-logo.component";
import { CampaignTableComponent } from "../campaign-table/campaign-table.component";

@Component({
    selector: 'app-campaign-history',
    standalone: true,
    templateUrl: './campaign-history.component.html',
    imports: [SearchComponent, HomeTileComponent, ButtonComponent, AddLogoComponent, CampaignTableComponent]
})
export class CampaignHistoryComponent {

}
