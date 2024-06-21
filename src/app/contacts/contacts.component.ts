import {
  Component,
  ElementRef,
  OnInit,
  inject,
  viewChild,
} from '@angular/core';
import { ContactsTableComponent } from '@contacts/contacts-table/contacts-table.component';
import { AddContactComponent } from '@contacts/add-contact/add-contact.component';
import { Store } from '@ngrx/store';
import * as contactAction from '@store/contacts/contacts.actions';
import { getContacts } from '@store/contacts/contacts.selectors';
import { Contact, StoreSate } from '@store/store.state';
import { Observable, map } from 'rxjs';
import { SearchComponent } from '@shared/search/search.component';
import { AddLogoComponent } from '@icons/add-logo/add-logo.component';
import { PortLogoComponent } from '@icons/port-logo/port-logo.component';
import { ButtonComponent } from '@shared/button/button.component';
import { CreateSegmentComponent } from '@contacts/create-segment/create-segment.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    SearchComponent,
    ButtonComponent,
    PortLogoComponent,
    AddLogoComponent,
    ContactsTableComponent,
    CreateSegmentComponent,
    AddContactComponent,
  ],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit {
  private store: Store<StoreSate> = inject(Store);
  public isAllContacts = true;
  public isCreateSegment = false;
  public isAddContact = false;
  public initialContacts$ = new Observable<Contact[]>();
  public contacts$ = new Observable<Contact[]>();
  public import = viewChild<ElementRef>('import');

  public ngOnInit(): void {
    this.store.dispatch(contactAction.loadContacts());
    this.initialContacts$ = this.store.select(getContacts);
    this.contacts$ = this.initialContacts$;
  }

  public handleSearch(searchValue: string) {
    this.contacts$ = this.initialContacts$.pipe(
      map((contacts) =>
        contacts.filter((contact) =>
          contact.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      )
    );
  }

  public setPage(selectedPage: 'allContacts' | 'segmentView') {
    this.isAllContacts = 'allContacts' === selectedPage;
  }

  public toggleCreateSegment() {
    this.isCreateSegment = !this.isCreateSegment;
  }

  public toggleAddContact() {
    this.isAddContact = !this.isAddContact;
  }

  public handleImport() {
    this.import()?.nativeElement.click();
  }
}
