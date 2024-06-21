import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckLogoComponent } from './check-logo.component';

describe('CheckLogoComponent', () => {
  let component: CheckLogoComponent;
  let fixture: ComponentFixture<CheckLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
