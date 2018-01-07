import { Injectable } from '@angular/core';

/**
 * 用于认证
 */
@Injectable()
export class AuthService {

  constructor() { }
  getAccesstoken() {
    return 'token';
  }

}
