import { Component, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../shared/modal/modal.component';
import { CloseLogoComponent } from '../partial/close-logo/close-logo.component';
import { ButtonComponent } from '../shared/button/button.component';
import { InputComponent } from '../shared/input/input.component';
import { PortLogoComponent } from '../partial/port-logo/port-logo.component';
import { SearchComponent } from '../shared/search/search.component';
import { ContactsTableComponent } from '../contacts-table/contacts-table.component';

import { CompletedAnimeComponent } from '../shared/completed-anime/completed-anime.component';

@Component({
  selector: 'app-create-segement',
  standalone: true,
  imports: [
    ModalComponent,
    CloseLogoComponent,
    ButtonComponent,
    InputComponent,
    PortLogoComponent,
    SearchComponent,
    ContactsTableComponent,
    CompletedAnimeComponent,
  ],
  templateUrl: './create-segement.component.html',
})
export class CreateSegementComponent {
  @Output() public closeClick = new EventEmitter<null>();
  public isDone = false;

  public emitClose(): void {
    this.closeClick.emit();
  }

  public handleCreateSegment() {
    this.triggerAnime();
  }

  public triggerAnime() {
    this.isDone = true;
    setTimeout(() => {
      this.isDone = false;
    }, 2000);
  }
}
