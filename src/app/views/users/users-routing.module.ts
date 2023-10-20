import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  
  {
    path: 'admin',
    component: AdminListComponent,
    data: {
      title: 'Admin List'
    }
  },
  {
    path: 'registro',
    component: NewUserComponent,
    data: {
      title: 'Registro'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
