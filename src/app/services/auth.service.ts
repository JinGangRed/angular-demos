import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';

/**
 * 用于认证
 */
@Injectable()
export class AuthService {
  localAccesstoken = 'Accesstoken';
  localUser = 'user';
  serviceUrl = '';
  constructor(private http: Http) {
    this.serviceUrl = environment.serverUrl;
  }
  getAccesstoken(email: string) {
    const reqURL = `${this.serviceUrl}/api/v1/user/login?email=${email}`;
    this.http.get(reqURL).subscribe(
      data => {
        console.log(data.json());
        console.log(data.json()['Data']);
        localStorage.setItem(this.localUser, email );
        localStorage.setItem(this.localAccesstoken, data.json()['Data']);
      },
      error2 => {
        console.log('发生错误', error2);
      }
    );
  }
  getLocalAccesstoken() {
    const local_Accesstoken = localStorage.getItem(this.localAccesstoken);
    if (local_Accesstoken) {
      const jwtHelper = new JwtHelper();
      console.log(tokenNotExpired(local_Accesstoken));
      console.log('accesstoken 是否过期：', jwtHelper.isTokenExpired(local_Accesstoken));
      console.log('accesstoken 解密：', jwtHelper.decodeToken(local_Accesstoken));
      console.log('accesstoken 过期时间：', jwtHelper.getTokenExpirationDate(local_Accesstoken));
      return local_Accesstoken;
    }else {
      console.log('请求获取token');
      this.getAccesstoken('gang.a.jin@capgemini.com');
      return null;
    }
  }

}
