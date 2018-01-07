import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CarouselHeaderComponent} from './carousel-header/carousel-header.component';
import {CarouselModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule.forRoot(),
  ],
  exports: [
    CommonModule,
    FormsModule,
    CarouselHeaderComponent,
  ],
  declarations: [
    CarouselHeaderComponent,
  ]
})
export class ShareModule { }
