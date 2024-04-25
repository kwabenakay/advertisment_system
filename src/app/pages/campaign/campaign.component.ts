import { Component } from '@angular/core';
import { CampaignHistoryComponent } from '../../components/campaign-history/campaign-history.component';
import { ScheduleCampaignComponent } from '../../components/schedule-campaign/schedule-campaign.component';

type Pages =
  | 'campaignHistory'
  | 'scehduleCampaign'
  | 'tamplates'
  | 'createSegment';
@Component({
  selector: 'app-campaign',
  standalone: true,
  templateUrl: './campaign.component.html',
  imports: [CampaignHistoryComponent, ScheduleCampaignComponent],
})
export class CampaignComponent {
  public isCampaignHistory = true;
  public isScheduleCapaign = false;
  public isTemplates = false;
  public isCreateSegmant = false;

  public setPage(selectedPage: Pages): void {
    this.isCampaignHistory = 'campaignHistory' === selectedPage;
    this.isScheduleCapaign = 'scehduleCampaign' === selectedPage;
    this.isTemplates = 'tamplates' === selectedPage;
    this.isCreateSegmant = 'createSegment' === selectedPage;
  }
}
