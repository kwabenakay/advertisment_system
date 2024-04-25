import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationLogoComponent } from './notification-logo.component';

describe('NotificationLogoComponent', () => {
  let component: NotificationLogoComponent;
  let fixture: ComponentFixture<NotificationLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
