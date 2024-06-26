import { Component, Input } from '@angular/core';

import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownLogoComponent } from '@icons/dropdown-logo/dropdown-logo.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [DropdownLogoComponent, ReactiveFormsModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() public label = '';
  @Input() public placeholder = '';
  @Input() public name = '';
  @Input() public options: any[] = [];
  @Input() public isError = false;
  @Input() public form: FormGroup = new FormGroup({});

  public isDropdown = false;

  public toggleDropdown() {
    this.isDropdown = !this.isDropdown;
  }

  public handleSelection(selection: string) {
    this.form.get(this.name)?.setValue(selection);
    this.toggleDropdown();
  }
}
