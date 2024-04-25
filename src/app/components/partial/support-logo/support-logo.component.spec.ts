import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportLogoComponent } from './support-logo.component';

describe('SupportLogoComponent', () => {
  let component: SupportLogoComponent;
  let fixture: ComponentFixture<SupportLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
