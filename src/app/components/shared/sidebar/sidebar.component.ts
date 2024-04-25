import { Component } from '@angular/core';
import { HomeLogoComponent } from '../../partial/home-logo/home-logo.component';
import { ContactsLogoComponent } from '../../partial/contacts-logo/contacts-logo.component';
import { ConversationLogoComponent } from '../../partial/conversation-logo/conversation-logo.component';
import { CampaignLogoComponent } from '../../partial/campaign-logo/campaign-logo.component';
import { SettingsLogoComponent } from '../../partial/settings-logo/settings-logo.component';
import { SupportLogoComponent } from '../../partial/support-logo/support-logo.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
