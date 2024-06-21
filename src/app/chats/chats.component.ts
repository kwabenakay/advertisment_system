import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Chat, Messages, StoreSate } from '@store/store.state';
import * as chatActions from '@store/chats/chats.actions';
import * as messageActions from '@store/messages/messages.actions';
import { getChats } from '@store/chats/chats.selectors';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getMessages } from '@store/messages/messages.selectors';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ChatTileComponent } from './chat-tile/chat-tile.component';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [CommonModule, ChatTileComponent, ChatDetailComponent],
  templateUrl: './chats.component.html',
})
export class ChatsComponent implements OnInit {
  private store: Store<StoreSate> = inject(Store);
  public chats$ = new Observable<Chat[]>();
  public selectedChat!: Chat;
  public selectedMessages$ = new Observable<Messages>();
  public isViewChat = false;

  public ngOnInit(): void {
    this.store.dispatch(chatActions.loadChats());
    this.chats$ = this.store.select(getChats);
  }

  public handleChatClick(chat: Chat) {
    this.selectedChat = chat;
    this.store.dispatch(messageActions.loadMessages({ id: chat.id }));
    this.selectedMessages$ = this.store.select(getMessages);
    this.isViewChat = true;
  }
}
