import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareLogoComponent } from './share-logo.component';

describe('ShareLogoComponent', () => {
  let component: ShareLogoComponent;
  let fixture: ComponentFixture<ShareLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShareLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
