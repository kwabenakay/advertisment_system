import { Component, OnInit, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '@shared/sidebar/sidebar.component';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { HomeTileComponent } from '@home/home-tile/home-tile.component';
import { HomeTableComponent } from '@home/home-table/home-table.component';
import { OperatorTableComponent } from '@home/operator-table/operator-table.component';
import { ColumnChartComponent } from '@home/column-chart/column-chart.component';
import { Overview, StoreSate } from '@store/store.state';
import * as overviewAction from '@store/overview/overview.actions'
import { getOverview } from '@store/overview/overview.selectors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    HomeTileComponent,
    HomeTableComponent,
    OperatorTableComponent,
    ColumnChartComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private store: Store<StoreSate> = inject(Store);
  public overview$ = new Observable<Overview>();
  public chart = signal<Overview>({
    totalCampaigns: 33,
    successfulCampaign: 30,
    pending: 3,
    failed: 10,
  });

  public ngOnInit(): void {
    this.store.dispatch(overviewAction.loadOverview());
    this.overview$ = this.store.select(getOverview);
    this.overview$.subscribe({
      next: (val) => {
        this.chart.set(val);
      },
    });
  }
}
