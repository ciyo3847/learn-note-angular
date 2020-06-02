/*
 * @Author: YZY
 * @Date: 2020-05-09 11:20:26
 * @LastEditTime: 2020-05-09 16:50:04
 * @FilePath: /angulardemo/src/app/to-do-list/to-do-list.component.ts
 * @Description: 
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.less']
})
export class ToDoListComponent implements OnInit {

  constructor() { }
  public listInput: string
  public toDolist: Array<ToDoListItem> = []
  ngOnInit() {
  }
  addList (e: any) :void {
    console.log(e)
    if (e.keyCode === 13) {
      let id:number = this.toDolist[0] ? this.toDolist[0].id + 1 : 1
      this.toDolist.push({
        id: id,
        title: this.listInput,
        status: 0,
      })
      this.listInput = ''
      this.toDolist.sort((a, b) => b.id - a.id)
    }
  }
  statusChange (id: number, checkedValue: number, unCheckedValye: number, e: any) :void {
    let changeIndex = this.toDolist.findIndex(item => item.id === id)
    this.toDolist[changeIndex].status = e.srcElement.checked ? checkedValue : unCheckedValye
  }
  removeList (id: number) :void {
    let removeIndex = this.toDolist.findIndex(item => item.id === id)
    this.toDolist.splice(removeIndex, removeIndex + 1)
  }
  countList (status: number) :number {
    let filtersList = this.toDolist.filter(item => item.status === status)
    return filtersList.length
  }
}
interface ToDoListItem {
  id: number;
  title: string;
  status: number; // 0 表示未完成， 1表示已完成
}
