import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from '../store/counter/counter.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent implements OnInit {
  private store =
    inject<Store<{ state: { count: number; name: string } }>>(Store);
  public count$!: Observable<number>;
  
  public ngOnInit(): void {
    this.count$ = this.store.select(selectCount);
    this.count$.subscribe({
      next: (state) => {
        console.log(state);
      },
    });
  }
}
