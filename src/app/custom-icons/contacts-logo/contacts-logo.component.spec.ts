import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsLogoComponent } from './contacts-logo.component';

describe('ContactsLogoComponent', () => {
  let component: ContactsLogoComponent;
  let fixture: ComponentFixture<ContactsLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
