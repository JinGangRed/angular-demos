import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-carousel-header',
  templateUrl: './carousel-header.component.html',
  styleUrls: [
    './carousel-header.component.css'
  ]
})
export class CarouselHeaderComponent implements OnInit {
  @Input()
  interVal = 2000; // 滚动间隔时间

  @Input()
  noWrapSlides = true; // 是否不循环滚动

  @Input()
  activesSlideIndex = 0; // 首先显示哪张

  @Input()
  slides = [];


  constructor() {
  }

  ngOnInit() {
    this.slides.push(
      {
        image: `../../assets/images/4.jpg`,
        text: '图片1'
      },
      {
        image: `../../assets/images/5.jpg`,
        text: '图片2'
      },
      {
        image: `../../assets/images/6.jpg`,
        text: '图片2'
      }
    );
  }
}
