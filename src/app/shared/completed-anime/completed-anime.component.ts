import { Component, Input } from '@angular/core';
import { CheckLogoComponent } from '@icons/check-logo/check-logo.component';

@Component({
  selector: 'app-completed-anime',
  standalone: true,
  imports: [CheckLogoComponent],
  templateUrl: './completed-anime.component.html',
  styleUrl: './completed-anime.component.css',
})
export class CompletedAnimeComponent {
  @Input() public isDone = false;
  @Input() public message = 'Completed';
}
