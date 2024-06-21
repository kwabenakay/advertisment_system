import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@shared/button/button.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
