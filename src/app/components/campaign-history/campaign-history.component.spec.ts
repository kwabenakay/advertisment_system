import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignHistoryComponent } from './campaign-history.component';

describe('CampaignHistoryComponent', () => {
  let component: CampaignHistoryComponent;
  let fixture: ComponentFixture<CampaignHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
