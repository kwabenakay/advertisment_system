import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignLogoComponent } from './campaign-logo.component';

describe('CampaignLogoComponent', () => {
  let component: CampaignLogoComponent;
  let fixture: ComponentFixture<CampaignLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
