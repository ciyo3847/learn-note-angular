/*
 * @Author: YZY
 * @Date: 2020-05-21 16:21:19
 * @LastEditTime: 2020-05-21 16:22:16
 * @FilePath: /angulardemo/src/app/pipe/html-handle.pipe.ts
 * @Description: 
 */ 
import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'htmlHandle'
})
export class HtmlHandlePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
