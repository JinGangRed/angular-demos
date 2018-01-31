import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ArticleResponseModel} from '../../models/ArticleModel';

@Injectable()
export class ArticleService {
  serverUrl: String;
  constructor(private http: HttpClient) {
    this.serverUrl = environment.serverUrl;
  }
  getArticles() {
    const serviceUrl = `${this.serverUrl}/api/article/back`;
    return this.http.get<ArticleResponseModel>(serviceUrl);
  }

}
