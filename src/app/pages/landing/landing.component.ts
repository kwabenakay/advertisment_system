import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
