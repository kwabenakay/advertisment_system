import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorTableComponent } from './operator-table.component';

describe('OperatorTableComponent', () => {
  let component: OperatorTableComponent;
  let fixture: ComponentFixture<OperatorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatorTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperatorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
