import { Component } from '@angular/core';
import { ReadComponent } from '../partial/read/read.component';
import { RepliedComponent } from '../partial/replied/replied.component';
import { FailedComponent } from '../partial/failed/failed.component';
import { SentComponent } from '../partial/sent/sent.component';

@Component({
  selector: 'app-campaign-table',
  standalone: true,
  imports: [SentComponent, ReadComponent,RepliedComponent,FailedComponent],
  templateUrl: './campaign-table.component.html'
})
export class CampaignTableComponent {

}
