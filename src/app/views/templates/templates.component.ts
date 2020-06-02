import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.less']
})
export class TemplatesComponent implements OnInit {

  constructor() { }
  public title: string = 'This is a title'
  public html: string = '<h2>This is to use innerHTML parsing h2 tags</h2>'
  public imgAlt: string = 'This is a image'
  public list: number[] = [1, 2, 3]
  public switchvalue: number = 1
  public inputModel: string
  public attr: string = 'red'

  public clickBtn (): void{
  	alert('触发事件')
  }
  public keyUpFn(e: object): void {
  	alert('keyUp')
  	console.log(e)
  }

  ngOnInit() {
  }

}
