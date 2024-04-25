import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElipsesComponent } from './elipses.component';

describe('ElipsesComponent', () => {
  let component: ElipsesComponent;
  let fixture: ComponentFixture<ElipsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElipsesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElipsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
