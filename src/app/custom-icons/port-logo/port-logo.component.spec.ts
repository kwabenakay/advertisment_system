import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortLogoComponent } from './port-logo.component';

describe('PortLogoComponent', () => {
  let component: PortLogoComponent;
  let fixture: ComponentFixture<PortLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
