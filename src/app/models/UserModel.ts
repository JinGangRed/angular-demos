// 用户模型
export class UserModel {
  objectId: string;
  nickname: string;
  email: string;
  role: string;
}
export class UserResponseModel {
  success: boolean;
  msg: string;
  users: Array<UserModel>;
  count: number;
}
