import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactComponent } from './add-contact.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { CloseLogoComponent } from '../partial/close-logo/close-logo.component';
import { ButtonComponent } from '../shared/button/button.component';
import { InputComponent } from '../shared/input/input.component';
import { CompletedAnimeComponent } from '../shared/completed-anime/completed-anime.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddContactComponent', () => {
  let component: AddContactComponent;
  let fixture: ComponentFixture<AddContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddContactComponent,
        ModalComponent,
        CloseLogoComponent,
        ButtonComponent,
        InputComponent,
        CompletedAnimeComponent,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
