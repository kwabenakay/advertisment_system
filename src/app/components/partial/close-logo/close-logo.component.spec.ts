import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseLogoComponent } from './close-logo.component';

describe('CloseLogoComponent', () => {
  let component: CloseLogoComponent;
  let fixture: ComponentFixture<CloseLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloseLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
