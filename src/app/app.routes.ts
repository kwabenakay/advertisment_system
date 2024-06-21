import { Routes } from '@angular/router';
import { authGuard } from './authenticated/auth-grauds/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadComponent: () =>
      import('./landing/landing.component').then(
        (landingComponent) => landingComponent.LandingComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then(
        (loginComponent) => loginComponent.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then(
        (registerComponent) => registerComponent.RegisterComponent
      ),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('@app/authenticated/authenticated.component').then(
        (authenticatedComponent) =>
          authenticatedComponent.AuthenticatedComponent
      ),
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('@home/home.component').then(
            (homeComponent) => homeComponent.HomeComponent
          ),
      },
      {
        path: 'contacts',
        loadComponent: () =>
          import('@contacts/contacts.component').then(
            (contactsComponent) => contactsComponent.ContactsComponent
          ),
      },
      {
        path: 'chats',
        loadComponent: () =>
          import('@chats/chats.component').then(
            (chatsComponent) => chatsComponent.ChatsComponent
          ),
      },
      {
        path: 'campaign',
        loadComponent: () =>
          import('@campaign/campaign.component').then(
            (campaignComponent) => campaignComponent.CampaignComponent
          ),
      },
      {
        path: 'counter',
        loadComponent: () =>
          import('@app/counter-page/counter-page.component').then(
            (homeComponent) => homeComponent.CounterPageComponent
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('@app/not-found/not-found.component').then(
        (noFoundComponent) => noFoundComponent.NotFoundComponent
      ),
  },
];
