/*
 * @Author: YZY
 * @Date: 2020-05-12 10:47:04
 * @LastEditTime: 2020-05-13 10:39:04
 * @FilePath: /angulardemo/src/app/views/communication/communication.component.ts
 * @Description: 
 */
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.less']
})
export class CommunicationComponent implements OnInit {
  @ViewChild('news') news: any
  constructor() { }

  ngOnInit() {
  }
  public msg: string
  run (p:string): void {
    alert('this is father methods' + ' : ' + p)
  }
  runChildRun (): void {
    console.log(this.news)
    this.news.runChild()
  }
}
