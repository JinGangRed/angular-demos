import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleListComponent} from './article-list/article-list.component';

const ngx_route: Routes = [
  {
    path: 'article-list',
    component: ArticleListComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ngx_route),
  ],
  exports: [
    RouterModule
  ],
})
export class BootstrapRoutingModule { }
