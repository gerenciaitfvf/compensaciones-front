import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/pages/login/login.component';
import {AuthGuard} from './guards/auth.guard'
import { AdminGuard } from './guards/admin.guard';
import { ChangePasswordComponent } from './views/pages/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate : [AuthGuard],
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./views/users/users.module').then(
            (m) => m.UsersModule
          ),
          canActivate: [AdminGuard]
      },
      {
        path: 'clubs',
        loadChildren: () =>
          import('./views/clubs/clubs.module').then(
            (m) => m.ClubsModule
          ),
      }
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'cambio-contrasena',
    component: ChangePasswordComponent,
    data: {
      title: 'Login Page',
    },
  },

  // {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
