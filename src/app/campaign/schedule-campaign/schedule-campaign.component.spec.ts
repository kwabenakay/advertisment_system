import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCampaignComponent } from './schedule-campaign.component';

describe('ScheduleCampaignComponent', () => {
  let component: ScheduleCampaignComponent;
  let fixture: ComponentFixture<ScheduleCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleCampaignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
