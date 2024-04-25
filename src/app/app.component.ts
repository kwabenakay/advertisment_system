import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { AlertComponent } from './components/alert/alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CounterPageComponent,AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ADVERT';
}
