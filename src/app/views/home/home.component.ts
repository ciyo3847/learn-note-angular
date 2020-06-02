/*
 * @Author: YZY
 * @Date: 2020-04-28 16:19:07
 * @LastEditTime: 2020-05-18 11:41:43
 * @FilePath: /angulardemo/src/app/views/home/home.component.ts
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public queryParams: Object
  constructor(public route:ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.queryParams = data
    })
  }
}
