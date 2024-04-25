import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedAnimeComponent } from './completed-anime.component';

describe('CompletedAnimeComponent', () => {
  let component: CompletedAnimeComponent;
  let fixture: ComponentFixture<CompletedAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedAnimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletedAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
