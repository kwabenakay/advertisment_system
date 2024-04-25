import { Component, EventEmitter, Output } from '@angular/core';
import { SearchLogoComponent } from '../../partial/search-logo/search-logo.component';
import { SearchOptionsLogoComponent } from '../../partial/search-options-logo/search-options-logo.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchLogoComponent, SearchOptionsLogoComponent],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Output() public searchInput = new EventEmitter<string>();

  public handleInput(searchValue: string) {
    this.searchInput.emit(searchValue);
  }
}
