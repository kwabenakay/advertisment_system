import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignTileComponent } from './campaign-tile.component';

describe('CampaignTileComponent', () => {
  let component: CampaignTileComponent;
  let fixture: ComponentFixture<CampaignTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
