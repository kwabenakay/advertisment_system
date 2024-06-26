import { Component, Input, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { DeleteLogoComponent } from '@icons/delete-logo/delete-logo.component';
import { EditLogoComponent } from '@icons/edit-logo/edit-logo.component';
import { TableTilesComponent } from '@shared/table-tiles/table-tiles.component';
import { StoreSate, Contact } from '@store/store.state';
import * as contactAction from '@store/contacts/contacts.actions'

@Component({
  selector: 'app-contacts-table',
  standalone: true,
  imports: [
    CommonModule,
    TableTilesComponent,
    EditLogoComponent,
    DeleteLogoComponent,
  ],
  templateUrl: './contacts-table.component.html',
})
export class ContactsTableComponent {
  private store: Store<StoreSate> = inject(Store);
  @Input() public tableValues = new Observable<Contact[]>();

  public handleEdit(contactId: number, newContact: Contact): void {
    this.store.dispatch(contactAction.editContact({ contactId, newContact }));
  }

  public handleDelete(contactIds: number[]): void {
    this.store.dispatch(contactAction.deleteContacts({ contactIds }));
  }
}
