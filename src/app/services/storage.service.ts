/*
 * @Author: YZY
 * @Date: 2020-05-11 11:39:36
 * @LastEditTime: 2020-05-11 11:43:09
 * @FilePath: /angulardemo/src/app/services/storage.service.ts
 * @Description: 
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  get () {
    return 'this is a storage service'
  }
}
