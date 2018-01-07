import { NgModule } from '@angular/core';
import {ShareModule} from '../app-assets/share.module';
import {NgxBootstrapShareModule} from './ngx-bootstrap-share.module';
import {BootstrapRoutingModule} from './bootstrap.routing.module';
import {AlertComponent} from './alert/alert.component';
import {AlertModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    ShareModule,
    AlertModule.forRoot(),
    // NgxBootstrapShareModule,
    BootstrapRoutingModule,
  ],
  declarations: [
    AlertComponent,
  ]
})
export class BootstrapLearningModule { }
