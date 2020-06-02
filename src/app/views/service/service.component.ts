import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.less']
})
export class ServiceComponent implements OnInit {

  constructor(public storage: StorageService) { }
  public serviceText: string
  ngOnInit() {
    this.serviceText = this.storage.get()
  }
}
