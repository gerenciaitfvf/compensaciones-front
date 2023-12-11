import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubsRoutingModule } from './clubs-routing.module';
import { OutstandingPaymentsComponent } from './outstanding-payments/outstanding-payments.component';


@NgModule({
  declarations: [
    OutstandingPaymentsComponent
  ],
  imports: [
    CommonModule,
    ClubsRoutingModule
  ]
})
export class ClubsModule { }
