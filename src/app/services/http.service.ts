/*
 * @Author: YZY
 * @Date: 2020-05-20 15:21:06
 * @LastEditTime: 2020-05-20 15:26:48
 * @FilePath: /angulardemo/src/app/services/http.service.ts
 * @Description: 
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = 'http://127.0.0.1:3000/'
  constructor(public http: HttpClient) { }
  get (api):any {
    return new Promise ((resolve, reject) => {
      let url = this.baseUrl + api
      this.http.get(url).subscribe(res => {
        resolve(res)
      }) 
    })
  }
}
