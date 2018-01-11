import { NgModule } from '@angular/core';
import {ShareModule} from '../../app-assets/share.module';
import {UserRoutingModule} from './user.routing.module';
import {UsersListComponent} from './users-list/users-list.component';
import { ModalModule, PaginationModule} from 'ngx-bootstrap';
import {UserAddComponent} from './user-add/user-add.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    ShareModule,
    UserRoutingModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    // BsDatepickerModule.forRoot(),
  ],
  declarations: [
    UsersListComponent,
    UserAddComponent,
  ]
})
export class UserModule { }
