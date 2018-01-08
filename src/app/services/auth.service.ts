import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';

/**
 * 用于认证
 */
@Injectable()
export class AuthService {
  localAccesstoken = 'Accesstoken';
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
      },
      error2 => {
        console.log('发生错误', error2);
      }
    );
  }
  getLocalAccesstoken() {
    const local_Accesstoken = localStorage.getItem(this.localAccesstoken);
    if (local_Accesstoken) {
      return local_Accesstoken;
    }else {
      return null;
    }
  }

}
