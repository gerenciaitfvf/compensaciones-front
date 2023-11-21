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
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ClubListComponent } from './club-list/club-list.component';
import { AssociationListComponent } from './association-list/association-list.component';

@NgModule({
  declarations: [AdminListComponent, NewUserComponent, ClubListComponent, AssociationListComponent],
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
    TableModule,
    UtilitiesModule
  ],
})
export class UsersModule {}
