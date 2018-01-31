import { NgModule } from '@angular/core';
import {BootstrapRoutingModule} from './bootstrap.routing.module';
import {ShareModule} from '../app-assets/share.module';

// import {ArticleListComponent} from './article-list/article-list.component';

@NgModule({
  imports: [
    ShareModule,
    BootstrapRoutingModule,
  ],
  declarations: [
    // ArticleListComponent
  ],
})
export class BootstrapPractiseModule { }
