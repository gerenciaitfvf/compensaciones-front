import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutstandingPaymentsComponent } from './outstanding-payments/outstanding-payments.component'
import {ClubGuard} from '../../guards/club.guard'
import { PaymentRegisterComponent } from './payment-register/payment-register.component';

const routes: Routes = [
  {
    path: 'pendientes',
    component: OutstandingPaymentsComponent,
    data: { title: 'Pagos Pendientes' }
  },
  {
    path: 'registro/:id',
    component: PaymentRegisterComponent,
    data: { title: 'Registro de Pagos' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }
