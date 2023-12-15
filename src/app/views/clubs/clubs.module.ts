import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ModalModule,
  TableModule,
  UtilitiesModule,
} from '@coreui/angular';

import { ClubsRoutingModule } from './clubs-routing.module';
import { OutstandingPaymentsComponent } from './outstanding-payments/outstanding-payments.component';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentRegisterComponent } from './payment-register/payment-register.component';


@NgModule({
  declarations: [
    OutstandingPaymentsComponent,
    PaymentRegisterComponent
  ],
  imports: [
    CommonModule,
    ClubsRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    TableModule,
    UtilitiesModule
  ],
})
export class ClubsModule { }
