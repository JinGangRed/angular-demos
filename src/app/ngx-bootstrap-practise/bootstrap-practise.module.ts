import { NgModule } from '@angular/core';
import {BootstrapRoutingModule} from './bootstrap.routing.module';
import {ShareModule} from '../app-assets/share.module';





import {ArticleListComponent} from './article-list/article-list.component';
import {CarouselHeaderComponent} from '../app-assets/carousel-header/carousel-header.component';

@NgModule({
  imports: [
    ShareModule,
    BootstrapRoutingModule,
  ],
  declarations: [
    ArticleListComponent,
  ]
})
export class BootstrapPractiseModule { }
