import { Component, OnInit, inject } from '@angular/core';
import { NotificationLogoComponent } from '../../partial/notification-logo/notification-logo.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NotificationLogoComponent, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  private authService = inject(AuthService);
  public userName = 'John Doe';
  public src = '';
  public number = '';
  public ngOnInit(): void {
    const userData = this.authService.getUserData();
    this.userName = `${userData.firstName} ${userData.lastName}`;
    this.userName =
      this.userName.length < 15
        ? this.userName
        : `${userData.firstName[0]} ${userData.lastName}`;
    this.src = userData.profile;
    this.number = userData.phoneNumber;
  }

  public handleLogout() {
    this.authService.logout();
  }
}
