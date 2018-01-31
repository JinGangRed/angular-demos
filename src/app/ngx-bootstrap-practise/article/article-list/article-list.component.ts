import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../../services/articles/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [
    ArticleService
  ]
})
export class ArticleListComponent implements OnInit {
  isMobile = navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(data => {
      console.log(data);
    });
  }

}
