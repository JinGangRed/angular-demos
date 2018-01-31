import { NgModule } from '@angular/core';
import {ShareModule} from '../../app-assets/share.module';
import {UserRoutingModule} from './user.routing.module';
import {UsersListComponent} from './users-list/users-list.component';
import {UserAddComponent} from './user-add/user-add.component';
import {NgxBootstrapShareModule} from '../ngx-bootstrap.share.module';

@NgModule({
  imports: [
    ShareModule,
    UserRoutingModule,
    NgxBootstrapShareModule
  ],
  declarations: [
    UsersListComponent,
    UserAddComponent,
  ]
})
export class UserModule { }
