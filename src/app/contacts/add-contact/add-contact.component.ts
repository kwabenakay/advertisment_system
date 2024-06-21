import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Contact, StoreSate } from '@store/store.state';
import * as contactsAction from '@store/contacts/contacts.actions';
import { CloseLogoComponent } from '@icons/close-logo/close-logo.component';
import { ButtonComponent } from '@shared/button/button.component';
import { CompletedAnimeComponent } from '@shared/completed-anime/completed-anime.component';
import { InputComponent } from '@shared/input/input.component';
import { ModalComponent } from '@shared/modal/modal.component';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [
    ModalComponent,
    CloseLogoComponent,
    ButtonComponent,
    InputComponent,
    CompletedAnimeComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './add-contact.component.html',
})
export class AddContactComponent implements OnInit {
  @Output() closeClick = new EventEmitter<null>();
  isDone = false;
  addContactForm!: FormGroup;
  addContact: Contact = {
    name: '',
    contactNumber: '',
    createdDate: '',
    campaign: '',
  };

  private builder: FormBuilder = inject(FormBuilder);
  private store: Store<StoreSate> = inject(Store);

  ngOnInit(): void {
    this.addContactForm = this.builder.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      campaign: ['', [Validators.required]],
      value: [''],
    });
  }
  emitClose() {
    this.closeClick.emit();
  }

  triggerAnime() {
    this.isDone = true;
    setTimeout(() => {
      this.emitClose();
    }, 2000);
  }

  handleSave() {
    if (this.addContactForm.valid) {
      this.addContact.name = this.addContactForm.get('name')?.value;
      this.addContact.contactNumber =
        this.addContactForm.get('phoneNumber')?.value;
      this.addContact.campaign = this.addContactForm.get('campaign')?.value;
      this.store.dispatch(
        contactsAction.addContacts({ contacts: [this.addContact] })
      );
      this.triggerAnime();
    } else {
      alert('Not valid');
    }
  }
}
