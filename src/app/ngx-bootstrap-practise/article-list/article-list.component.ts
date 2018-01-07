import { Component, OnInit } from '@angular/core';
import {BaseService} from '../../services/base.service';
// import {Browser} from "selenium-webdriver";
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [BaseService]
})
export class ArticleListComponent implements OnInit {
  isMobile = navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
  constructor(private baseService: BaseService) { }

  ngOnInit() {
    console.log(navigator.userAgent);
    console.log(this.isMobile);
    this.baseService.getBaiDu();
  }

}
