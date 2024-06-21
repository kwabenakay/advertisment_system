import { Component, EventEmitter, Output } from '@angular/core';
import { ContactsTableComponent } from '@contacts/contacts-table/contacts-table.component';
import { CloseLogoComponent } from '@icons/close-logo/close-logo.component';
import { PortLogoComponent } from '@icons/port-logo/port-logo.component';
import { ButtonComponent } from '@shared/button/button.component';
import { CompletedAnimeComponent } from '@shared/completed-anime/completed-anime.component';
import { InputComponent } from '@shared/input/input.component';
import { ModalComponent } from '@shared/modal/modal.component';
import { SearchComponent } from '@shared/search/search.component';

@Component({
  selector: 'app-create-segment',
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
  templateUrl: './create-segment.component.html',
})
export class CreateSegmentComponent {
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
