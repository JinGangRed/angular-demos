import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleListComponent} from './article-list/article-list.component';

const ngx_route: Routes = [
  {
    path: 'article-list',
    component: ArticleListComponent,
  },
  {
    path: 'users',
    loadChildren: './users/user.module#UserModule'
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
