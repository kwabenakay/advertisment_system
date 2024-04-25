import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Messages } from '../../store/store.state';
import { EmojiLogoComponent } from '../partial/emoji-logo/emoji-logo.component';
import { AttachLogoComponent } from '../partial/attach-logo/attach-logo.component';
import { SendLogoComponent } from '../partial/send-logo/send-logo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-detail',
  standalone: true,
  imports: [
    CommonModule,
    EmojiLogoComponent,
    AttachLogoComponent,
    SendLogoComponent,
  ],
  templateUrl: './chat-detail.component.html',
})
export class ChatDetailComponent {
  @Input() public src = '';
  @Input({ required: true }) public name = 'Alex haze';
  @Input({ required: true }) public selectedMessages$ =
    new Observable<Messages>();
}
