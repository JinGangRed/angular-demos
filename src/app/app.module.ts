import { BrowserModule } from '@angular/platform-browser';
import {forwardRef, NgModule} from '@angular/core';

import { AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './app-assets/core.module';
import {ShareModule} from './app-assets/share.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {BaseHttpInterceptor} from './services/base-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    ShareModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseHttpInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
