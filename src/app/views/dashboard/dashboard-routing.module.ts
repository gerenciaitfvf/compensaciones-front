import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssociationDashboardComponent } from './association-dashboard/association-dashboard.component';
import { ClubDashboardComponent } from './club-dashboard/club-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {ClubGuard} from '../../guards/club.guard'
import {AdminGuard} from '../../guards/admin.guard'
import {AssociationGuard} from '../../guards/association.guard'

const routes: Routes = [
  {
    path: '',
    component: ClubDashboardComponent,
    data: {
      title: `Dashboard`
    },
    canActivate : [ClubGuard]
  },
  {
    path: 'asociacion',
    component: AssociationDashboardComponent,
    data: {
      title: 'Licence'
    },
    canActivate: [AssociationGuard]
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    data: {
      title: 'Admin'
    },
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
