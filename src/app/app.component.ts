/*
 * @Author: YZY
 * @Date: 2020-04-28 15:40:18
 * @LastEditTime: 2020-05-18 15:53:56
 * @FilePath: /angulardemo/src/app/app.component.ts
 * @Description: 
 */
import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angulardemo';
  constructor (public route: Router) { }
  goHome () {
    let param:NavigationExtras = {
      queryParams: { 'session_id': '123' },
    }
    this.route.navigate(['home'], param)
  }
}
