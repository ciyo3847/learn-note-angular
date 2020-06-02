/*
 * @Author: YZY
 * @Date: 2020-05-21 09:06:01
 * @LastEditTime: 2020-05-21 16:46:10
 * @FilePath: /angulardemo/src/app/views/orderSystem/pcontent/pcontent.component.ts
 * @Description: 
 */ 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpService } from '../../../services/http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.component.html',
  styleUrls: ['./pcontent.component.less']
})
export class PcontentComponent implements OnInit {
  public info: CateInfo = {
    cate_id: null,
    price: null,
    title: null,
    des: null,
  }
  constructor(private activeRoute: ActivatedRoute,
              private http: HttpService,
              private location: Location) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(data => {
      let api = 'getPcontent?id=' + data.id
      this.http.get(api).then(res => {
        if (res.success) {
          this.info = res.data
        }
      })
    })
  }
  goBack():void {
    this.location.back()
  }

}
interface CateInfo{
  cate_id: number,
  price: number,
  title: String,
  des: string,
}
