import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSegementComponent } from './create-segment.component';

describe('CreateSegementComponent', () => {
  let component: CreateSegementComponent;
  let fixture: ComponentFixture<CreateSegementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSegementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSegementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
