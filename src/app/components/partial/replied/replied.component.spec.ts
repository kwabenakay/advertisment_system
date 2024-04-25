import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepliedComponent } from './replied.component';

describe('RepliedComponent', () => {
  let component: RepliedComponent;
  let fixture: ComponentFixture<RepliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepliedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
