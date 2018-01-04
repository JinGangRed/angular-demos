import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './app-assets/welcome/welcome.component';
import {PageNotFoundComponent} from './app-assets/page-not-found/page-not-found.component';

const app_routes: Routes =  [
  {
    path: 'guide',
    loadChildren: './guide-learning/guide.module#GuideModule',
  },
  {
    path: 'bootstrap',
    loadChildren: './ngx-bootstrap-learning/bootstrap-learning.module#BootstrapLearningModule',
  },
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      app_routes,
      // {enableTracing : true} // 查看路由生命周期都做了什么事
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
