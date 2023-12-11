import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutstandingPaymentsComponent } from './outstanding-payments/outstanding-payments.component'
import {ClubGuard} from '../../guards/club.guard'

const routes: Routes = [
  {
    path: 'pendientes',
    component: OutstandingPaymentsComponent,
    data: { title: 'Pagos Pendientes' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }
