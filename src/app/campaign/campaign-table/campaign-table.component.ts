import { Component } from '@angular/core';
import { FailedComponent } from '@icons/failed/failed.component';
import { ReadComponent } from '@icons/read/read.component';
import { RepliedComponent } from '@icons/replied/replied.component';
import { SentComponent } from '@icons/sent/sent.component';

@Component({
  selector: 'app-campaign-table',
  standalone: true,
  imports: [SentComponent, ReadComponent, RepliedComponent, FailedComponent],
  templateUrl: './campaign-table.component.html',
})
export class CampaignTableComponent {}
