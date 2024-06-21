import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { EditLogoComponent } from '@icons/edit-logo/edit-logo.component';
import { ShareLogoComponent } from '@icons/share-logo/share-logo.component';
import { Conversation, StoreSate } from '@store/store.state';
import { loadConversations } from '@store/conversations/conversations.actions';
import { selectAllConversations } from '@store/conversations/conversations.selector';

@Component({
  selector: 'app-home-table',
  standalone: true,
  imports: [CommonModule, EditLogoComponent, ShareLogoComponent],
  templateUrl: './home-table.component.html',
})
export class HomeTableComponent implements OnInit {
  private store: Store<StoreSate> = inject(Store);
  topConversations$ = new Observable<Conversation[]>();

  public ngOnInit(): void {
    this.store.dispatch(loadConversations());
    this.topConversations$ = this.store.select(selectAllConversations);
  }
}
