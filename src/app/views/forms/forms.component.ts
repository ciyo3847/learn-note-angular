import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.less']
})
export class FormsComponent implements OnInit {

  constructor() { }

  public people: People = {
    userName: '',
    sex: '',
    city: 'shanghai',
    hobby: '',
    mark: '',
  }
  public hobby: object = {
    read: '',
    drawing: '',
    sport: '',
  }
  public cityOptions: SelectOption[] = [
    { name: '北京', value: 'beijing', },
    { name: '上海', value: 'shanghai', },
    { name: '深圳', value: 'shenzhen', },
    { name: '广州', value: 'guangzhou', },
  ]

  ngOnInit() {
  }
  getForms () {
    for (const key in this.hobby) {
      if (this.hobby[key]) {
        this.people.hobby = key
      }
    }
    alert(JSON.stringify(this.people))
  }

}

interface People {
  userName: string;
  sex: string;
  city: string;
  hobby: string;
  mark: string;
}
interface SelectOption {
  name: string;
  value: any;
}
