import { Routes } from '@angular/router';
import { authGuard } from './grauds/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadComponent: () =>
      import('./pages/landing/landing.component').then(
        (landingComponent) => landingComponent.LandingComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(
        (loginComponent) => loginComponent.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (registerComponent) => registerComponent.RegisterComponent
      ),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/authenticated/authenticated.component').then(
        (authenticatedComponent) =>
          authenticatedComponent.AuthenticatedComponent
      ),
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then(
            (homeComponent) => homeComponent.HomeComponent
          ),
      },
      {
        path: 'contacts',
        loadComponent: () =>
          import('./pages/contacts/contacts.component').then(
            (contactsComponent) => contactsComponent.ContactsComponent
          ),
      },
      {
        path: 'chats',
        loadComponent: () =>
          import('./pages/chats/chats.component').then(
            (chatsComponent) => chatsComponent.ChatsComponent
          ),
      },
      {
        path: 'campaign',
        loadComponent: () =>
          import('./pages/campaign/campaign.component').then(
            (campaignComponent) => campaignComponent.CampaignComponent
          ),
      },
      {
        path: 'counter',
        loadComponent: () =>
          import('./counter-page/counter-page.component').then(
            (homeComponent) => homeComponent.CounterPageComponent
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (noFoundComponent) => noFoundComponent.NotFoundComponent
      ),
  },
];
