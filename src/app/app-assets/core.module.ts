import {NgModule, Optional, SkipSelf} from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ShareModule} from './share.module';

@NgModule({
  imports: [
    ShareModule
  ],
  exports: [
    WelcomeComponent,
    PageNotFoundComponent
  ],
  declarations: [
    WelcomeComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule {
  // 为了避免多次加载
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
