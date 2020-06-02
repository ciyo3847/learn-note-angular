/*
 * @Author: YZY
 * @Date: 2020-05-14 11:44:54
 * @LastEditTime: 2020-05-14 11:45:16
 * @FilePath: /angulardemo/src/app/components/code/code.component.ts
 * @Description: 
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.less']
})
export class CodeComponent implements OnInit {
  @Input() type: string
  constructor() { }

  ngOnInit() {
  }

}
