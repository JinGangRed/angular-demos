import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AlertComponent} from './alert/alert.component';

const ngx_routes: Routes = [
  {
    path: 'alert', component: AlertComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ngx_routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class BootstrapRoutingModule { }
