/*
 * @Author: YZY
 * @Date: 2020-04-28 17:49:00
 * @LastEditTime: 2020-05-13 11:11:53
 * @FilePath: /angulardemo/src/app/components/news/news.component.ts
 * @Description: 
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  @Input() public msg: string
  @Output() private run = new EventEmitter()
  constructor() { }
  public newsTitle: string = 'This is a news title'

  ngOnInit() {
  }
  public content: string
  runFatherFn ():void {
    this.run.emit('this is child content: ' + this.content)
  }
  runChild ():void {
    alert('this is a child methods')
  }
}
