import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOptionsLogoComponent } from './search-options-logo.component';

describe('SearchOptionsLogoComponent', () => {
  let component: SearchOptionsLogoComponent;
  let fixture: ComponentFixture<SearchOptionsLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchOptionsLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchOptionsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
