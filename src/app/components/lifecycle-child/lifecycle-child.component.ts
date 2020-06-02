/*
 * @Author: YZY
 * @Date: 2020-05-14 11:30:09
 * @LastEditTime: 2020-05-14 11:39:15
 * @FilePath: /angulardemo/src/app/components/lifecycle-child/lifecycle-child.component.ts
 * @Description: 
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.less']
})
export class LifecycleChildComponent implements OnInit {
  @Input() msg: string
  public inputValue: string
  constructor() { }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('00 ngOnChanges -- Called before any other lifecycle hook. Use it to inject dependencies')
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('01 ngOnInit -- Called after the constructor, initializing input properties, and the first call to ngOnChanges.')
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('02 ngDoCheck -- Called every time that the input properties of a component or a directive are checked.')
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("03 ngAfterContentInit -- Called after ngOnInit when the component's or directive's content has been initialized.")
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("04 ngAfterContentChecked -- Called after every check of the component's or directive's content.")
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("05 ngAfterViewInit -- Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.")
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("06 ngAfterViewChecked -- Called after every check of the component's view. Applies to components only.")
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("07 ngOnDestroy -- Called once, before the instance is destroyed.")
  }
}
