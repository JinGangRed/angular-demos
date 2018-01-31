import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {ArticleListComponent} from './article-list/article-list.component';

const article_routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(article_routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ArticleRoutingModule { }
