import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ClubListComponent } from './club-list/club-list.component';

@NgModule({
  declarations: [AdminListComponent, NewUserComponent, ClubListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
  ],
})
export class UsersModule {}
