import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CampaignLogoComponent } from '@icons/campaign-logo/campaign-logo.component';
import { ContactsLogoComponent } from '@icons/contacts-logo/contacts-logo.component';
import { ConversationLogoComponent } from '@icons/conversation-logo/conversation-logo.component';
import { HomeLogoComponent } from '@icons/home-logo/home-logo.component';
import { SettingsLogoComponent } from '@icons/settings-logo/settings-logo.component';
import { SupportLogoComponent } from '@icons/support-logo/support-logo.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    HomeLogoComponent,
    ContactsLogoComponent,
    ConversationLogoComponent,
    CampaignLogoComponent,
    SupportLogoComponent,
    SettingsLogoComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
