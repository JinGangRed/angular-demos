import {UserModel} from './UserModel';
import {BaseResponseModel} from './BaseResponseModel';

export class ArticleModel {
  title: string;
  content: string;
  visit_count: number;
  comment_count: number;
  isTop: boolean;
  created: Date;
  publish_time: Date;
  updated: Date;
  status: Date;
  author_id: string;
  author: UserModel;
}
export class ArticleResponseModel extends BaseResponseModel {
  data: Array<ArticleModel>;
}
