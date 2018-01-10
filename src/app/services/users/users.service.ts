import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UserResponseModel} from '../../models/UserModel';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UsersService {
  serverUrl: string;
  constructor(private http: HttpClient) {
    this.serverUrl = environment.serverUrl;
  }
  // 获得用户列表
  getUsers(itemsPerPage: number, currentPage?: number, sortName?: string, sortOrder?: boolean): Observable<UserResponseModel> {
    const serviceUrl =
      `${this.serverUrl}/api/users?itemsPerPage=${itemsPerPage}&currentPage=${currentPage}&sortName=${sortName}&sortOrder=${sortOrder}`;
    return this.http.get<UserResponseModel>(serviceUrl);
  }
  addUser(user) {
    const serviceUrl = `${this.serverUrl}/api/users`;
    this.http.post(serviceUrl, user).subscribe(data => {
        console.log(data);
      },
      error2 => {
        console.log('发生了错误:', error2);
      });
  }
}
