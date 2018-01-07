import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alerts: any = [];
  constructor() { }

  ngOnInit() {
  }
  addAlert() {
    this.alerts.push({
      type: 'info',
      msg: `这是一条添加的提示,将会在2秒后关闭`,
      timeout: 2000
    });
  }

}
