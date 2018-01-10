import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';
import {UserAddComponent} from './user-add/user-add.component';
const user_routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: 'add',
    component: UserAddComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(user_routes),
  ],
  exports: [
    RouterModule
  ],
})
export class UserRoutingModule { }
