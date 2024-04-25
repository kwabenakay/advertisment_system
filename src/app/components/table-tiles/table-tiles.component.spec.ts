import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTilesComponent } from './table-tiles.component';

describe('TableTilesComponent', () => {
  let component: TableTilesComponent;
  let fixture: ComponentFixture<TableTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
