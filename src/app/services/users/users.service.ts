import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UserModel, UserResponseModel} from '../../models/UserModel';
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
  // 添加一个用户
  addUser(user: UserModel): Observable<boolean> {
    const serviceUrl = `${this.serverUrl}/api/users`;
    return this.http.post(serviceUrl, user).map(data => {
        if (data['success']) {
          alert('成功添加用户');
          return true;
        }else {
          alert('添加用户失败,失败原因: ' + data['msg']);
          return false;
        }
      },
      error2 => {
        console.log('添加用户发生错误：' , error2);
        return false;
      });
  }
  // 删除用户
  deleteUser(id: string) {
    return true;
  }
}
