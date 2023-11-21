import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ClubListComponent } from './club-list/club-list.component';
import { AssociationListComponent } from './association-list/association-list.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminListComponent,
    data: {
      title: 'Admin List',
    },
  },
  {
    path: 'club',
    component: ClubListComponent,
    data: {
      title: 'Club List',
    },
  },
  {
    path: 'registro',
    component: NewUserComponent,
    data: {
      title: 'Registro',
    },
  },
  {
    path: 'asociaciones',
    component: AssociationListComponent,
    data: {
      title: 'Asociaciones',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
