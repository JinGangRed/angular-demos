import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ModalModule, PaginationModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [
    ReactiveFormsModule,
    PaginationModule,
    ModalModule
  ]
})
export class NgxBootstrapShareModule { }
