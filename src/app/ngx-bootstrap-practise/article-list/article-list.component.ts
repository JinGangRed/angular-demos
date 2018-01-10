import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  isMobile = navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
  constructor(private auth: AuthService) { }

  ngOnInit() {
    console.log(navigator.userAgent);
    console.log(this.isMobile);
  }

}
