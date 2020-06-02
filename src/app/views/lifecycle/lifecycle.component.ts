/*
 * @Author: YZY
 * @Date: 2020-05-14 11:27:23
 * @LastEditTime: 2020-05-14 11:38:01
 * @FilePath: /angulardemo/src/app/views/lifecycle/lifecycle.component.ts
 * @Description: 
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.less']
})
export class LifecycleComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  public showComponent: Boolean = true
  toggle (): void {
    this.showComponent = !this.showComponent
  }
}
