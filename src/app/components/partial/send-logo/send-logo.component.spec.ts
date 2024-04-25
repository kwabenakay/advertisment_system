import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendLogoComponent } from './send-logo.component';

describe('SendLogoComponent', () => {
  let component: SendLogoComponent;
  let fixture: ComponentFixture<SendLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
