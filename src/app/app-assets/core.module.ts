import {NgModule, Optional, SkipSelf} from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ShareModule} from './share.module';
import {CarouselHeaderComponent} from './carousel-header/carousel-header.component';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from '../services/auth.service';

@NgModule({
  imports: [
    ShareModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    BrowserModule,
    WelcomeComponent,
    PageNotFoundComponent,
    CarouselHeaderComponent,
  ],
  declarations: [
    WelcomeComponent,
    PageNotFoundComponent,
  ],
  providers: [
    AuthService
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
