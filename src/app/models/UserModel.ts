// 用户模型
import {BaseResponseModel} from './BaseResponseModel';

export class UserModel {
  objectId: string;
  nickname: string;
  email: string;
  role: string;
}
export class UserResponseModel extends BaseResponseModel {
  users: Array<UserModel>;
  count: number;
}
