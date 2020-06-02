import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-get-dom',
  templateUrl: './get-dom.component.html',
  styleUrls: ['./get-dom.component.less']
})
export class GetDomComponent implements OnInit {
  @ViewChild('domNode') domNode: any
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.domNode.nativeElement.style.color = 'red'
  }
}
