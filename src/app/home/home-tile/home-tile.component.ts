import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-tile',
  standalone: true,
  imports: [],
  templateUrl: './home-tile.component.html',
})
export class HomeTileComponent {
  @Input() public title = '';
  @Input() public count = 0;

  public getIcon() {
    switch (this.title) {
      case 'Total Campaign': {
        return 'total-campaign.svg';
      }
      case 'Successful Campaign': {
        return 'successful-campaign.svg';
      }
      case 'Pending': {
        return 'pending.svg';
      }
      case 'Failed': {
        return 'failed.svg';
      }
      case 'Sent': {
        return 'sent.svg';
      }
      case 'Delivered': {
        return 'delivered.svg';
      }
      case 'Read': {
        return 'delivered.svg';
      }
      case 'Replied': {
        return 'replied.svg';
      }
      case 'Failed.': {
        return 'failed..svg';
      }
    }
    return '';
  }
}
