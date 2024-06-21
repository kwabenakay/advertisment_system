import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Operator, StoreSate } from '@store/store.state';
import { loadOperators } from '@store/operators/operators.actions';
import { selectAllOperators } from '@store/operators/operators.selectors';
import { Observable } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { EllipsesComponent } from '@icons/ellipses/ellipses.component';

@Component({
  selector: 'app-operator-table',
  standalone: true,
  imports: [CommonModule, EllipsesComponent, NgxPaginationModule],
  templateUrl: './operator-table.component.html',
})
export class OperatorTableComponent implements OnInit {
  private store: Store<StoreSate> = inject(Store);
  public operators$ = new Observable<Operator[]>();

  public page = 1;
  public itemsPerPage = 5;

  public ngOnInit(): void {
    this.store.dispatch(loadOperators());
    this.operators$ = this.store.select(selectAllOperators);
  }
}
