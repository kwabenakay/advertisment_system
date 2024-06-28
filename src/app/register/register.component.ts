import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AlertService } from '@shared/alert-service/alert.service';
import { ButtonComponent } from '@shared/button/button.component';
import { InputComponent } from '@shared/input/input.component';
import { triggerRegister } from '@store/auth/login.actions';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, RouterLink],
})
export class RegisterComponent {
  private builder = inject(FormBuilder);
  private store = inject(Store);
  private alert = inject(AlertService);
  public registerForm = this.builder.group({
    profile: '',
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phoneNumber: '',
    password: ['', [Validators.required]],
    repeatPassword: ['', [Validators.required]],
  });
  public emailError = false;
  public passwordError = false;
  public firstNameError = false;
  public lastNameError = false;
  public image = '';

  public handleClick(): void {
    this.emailError = !(this.registerForm.get('email')?.valid ?? false);
    this.passwordError = !(this.registerForm.get('password')?.valid ?? false);
    this.firstNameError = !(this.registerForm.get('firstName')?.valid ?? false);
    this.lastNameError = !(this.registerForm.get('lastName')?.valid ?? false);
    const values = this.registerForm.value;
    if (values.password !== values.repeatPassword) {
      this.alert.triggerAlert('error', 'Passwords do not match');
      return;
    }
    const register = {
      profile: values.profile ?? '',
      email: values.email ?? '',
      firstName: values.firstName ?? '',
      lastName: values.lastName ?? '',
      password: values.password ?? '',
      phoneNumber: values.phoneNumber ?? '',
    };
    if (this.registerForm.valid) {
      this.store.dispatch(triggerRegister({ register }));
    } else {
      this.alert.triggerAlert('error', 'Form not valid');
    }
  }
  public isRepeatPasswordError(): boolean {
    const isEqual =
      this.registerForm.get('repeatPassword')?.value ===
      this.registerForm.get('password')?.value;
    return (
      (this.registerForm.get('repeatPassword')?.touched && !isEqual) || false
    );
  }

  private passwordEqualValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = this.registerForm.get('password')?.value ?? '';
    return control.value === password ? null : { passwordMismatch: true };
  }

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          const img = new Image();
          img.onload = () => {
            const MAX_WIDTH = 800;
            const MAX_HEIGHT = 600;
            let width = img.width;
            let height = img.height;
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            } else if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            } else {
              this.alert.triggerAlert('error', 'Image too large');
            }
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(img, 0, 0, width, height);
            this.image = canvas.toDataURL('image/jpeg', 0.5);
            this.registerForm.get('profile')?.setValue(this.image);
          };
          img.src = reader.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        this.alert.triggerAlert('error', 'File not an image');
      }
    }
  }
}
