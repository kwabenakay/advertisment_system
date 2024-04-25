import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationLogoComponent } from './conversation-logo.component';

describe('ConversationLogoComponent', () => {
  let component: ConversationLogoComponent;
  let fixture: ComponentFixture<ConversationLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConversationLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
