import { NgModule } from '@angular/core';
import {ShareModule} from '../../app-assets/share.module';
import {ArticleRoutingModule} from './article-routing.module';
import {ArticleListComponent} from './article-list/article-list.component';

@NgModule({
  imports: [
    ShareModule,
    ArticleRoutingModule
  ],
  declarations: [
    ArticleListComponent
  ]
})
export class ArticleModule { }
