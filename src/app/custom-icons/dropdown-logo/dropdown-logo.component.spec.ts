import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownLogoComponent } from './dropdown-logo.component';

describe('DropdownLogoComponent', () => {
  let component: DropdownLogoComponent;
  let fixture: ComponentFixture<DropdownLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
