import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Messages } from '../../store/store.state';
import { CommonModule } from '@angular/common';
import { AttachLogoComponent } from '@icons/attach-logo/attach-logo.component';
import { EmojiLogoComponent } from '@icons/emoji-logo/emoji-logo.component';
import { SendLogoComponent } from '@icons/send-logo/send-logo.component';

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
