
import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {AuthService} from './auth.service';

/**
 * Http请求的拦截器
 */
@Injectable()
export class BaseHttpInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {
    console.log('BaseHttpInterceptor had Injected');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('拦截器起作用了');
    const started = Date.now();
    const accesstoken = `Bearer ${this.auth.getLocalAccesstoken()}`;
    const authReq = req.clone({
      setHeaders: {
        Authorization: accesstoken
      }});
    return next.handle(authReq).do(event => {
      if (event instanceof HttpResponse ) {
        const elapsed = Date.now() - started;
        console.log(`Request for ${req.urlWithParams} took ${elapsed} ms` );
      }
    });
  }
}
