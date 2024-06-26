import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '@shared/input/input.component';
import { ButtonComponent } from '@shared/button/button.component';
import { AuthService } from '@authenticated/auth/auth.service';
import { triggerLogin } from '@store/auth/login.actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, ButtonComponent, RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  private builder = inject(FormBuilder);
  private store = inject(Store);
  private authService = inject(AuthService);
  private router = inject(Router);
  public loginForm: FormGroup = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  public emailError = false;
  public passwordError = false;

  public ngOnInit(): void {
    if (this.authService.getIsAuthenticated()) {
      this.router.navigateByUrl('/auth/home');
    }
    this.authService.getLoginSuccessObservable().subscribe({
      next: (isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigateByUrl(this.authService.getDestination());
        }
      },
    });

    const user = this.authService.getUserData();
    if (user?.id) {
      this.router.navigateByUrl(this.authService.getDestination());
    }
  }

  public handleClick(): void {
    this.emailError = !(this.loginForm.get('email')?.valid ?? false);
    this.passwordError = !(this.loginForm.get('password')?.valid ?? false);
    const login = {
      email: this.loginForm.get('email')?.value ?? '',
      password: this.loginForm.get('password')?.value ?? '',
    };
    if (!(this.emailError || this.passwordError)) {
      this.store.dispatch(triggerLogin({ login }));
    }
  }
}
