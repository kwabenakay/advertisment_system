import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllConversations } from '../../store/conversations/conversations.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { loadConversations } from '../../store/conversations/conversations.actions';
import { Conversation, StoreSate } from '../../store/store.state';
import { EditLogoComponent } from '../partial/edit-logo/edit-logo.component';
import { ShareLogoComponent } from '../partial/share-logo/share-logo.component';

@Component({
  selector: 'app-home-table',
  standalone: true,
  imports: [CommonModule, EditLogoComponent, ShareLogoComponent],
  templateUrl: './home-table.component.html',
})
export class HomeTableComponent implements OnInit {
  private store: Store<StoreSate> = inject(Store);
  topCoversations$ = new Observable<Conversation[]>();

  public ngOnInit(): void {
    this.store.dispatch(loadConversations());
    this.topCoversations$ = this.store.select(selectAllConversations);
  }
}
