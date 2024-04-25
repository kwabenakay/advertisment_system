import { Component, Input } from '@angular/core';
import { Chat } from '../../store/store.state';

@Component({
  selector: 'app-chat-tile',
  standalone: true,
  imports: [],
  templateUrl: './chat-tile.component.html',
})
export class ChatTileComponent {
  @Input() public src = '';
  @Input() public chat: Chat = {
    id: '1',
    name: 'Alex haze',
    lastMessage: 'Lorem Ipsum is smiply dummy',
    unread: 2,
    lastActive: '2:30PM',
  };
  @Input() public isActive = false;
}
