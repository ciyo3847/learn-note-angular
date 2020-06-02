/*
 * @Author: YZY
 * @Date: 2020-05-18 16:02:17
 * @LastEditTime: 2020-05-21 16:46:35
 * @FilePath: /angulardemo/src/app/views/orderSystem/order-home/order-home.component.ts
 * @Description: 
 */
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-home',
  templateUrl: './order-home.component.html',
  styleUrls: ['./order-home.component.less']
})
export class OrderHomeComponent implements OnInit {
  public menuList: Array<Classify>
  constructor(public http: HttpService, public route: Router) { }

  ngOnInit() {
    this.http.get('getMenu').then(res => {
      if (res.success) {
        this.menuList = res.data
      }
    })
  }
  goPcontent (id: number):void {
    this.route.navigate(['order/detail', id])
  }

}
interface Classify {
  pid: number,
  title: string,
  list: Array<Food>,
}
interface Food {
  title: string,
  price: number,
  cate_id: number,
}
