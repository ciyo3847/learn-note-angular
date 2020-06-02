/*
 * @Author: YZY
 * @Date: 2020-04-28 15:40:18
 * @LastEditTime: 2020-05-21 16:21:32
 * @FilePath: /angulardemo/src/app/app.module.ts
 * @Description: 
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { StorageService } from './services/storage.service';
import { HttpService } from './services/http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { TemplatesComponent } from './views/templates/templates.component';
import { FormsComponent } from './views/forms/forms.component';
import { ToDoListComponent } from './views/to-do-list/to-do-list.component';
import { ServiceComponent } from './views/service/service.component';
import { GetDomComponent } from './views/get-dom/get-dom.component';
import { CommunicationComponent } from './views/communication/communication.component';
import { LifecycleComponent } from './views/lifecycle/lifecycle.component';
import { LifecycleChildComponent } from './components/lifecycle-child/lifecycle-child.component';
import { CodeComponent } from './components/code/code.component';
import { RouterComponent } from './views/router/router.component';
import { OrderHomeComponent } from './views/orderSystem/order-home/order-home.component';
import { PcontentComponent } from './views/orderSystem/pcontent/pcontent.component';
import { HtmlHandlePipe } from './pipe/html-handle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    TemplatesComponent,
    FormsComponent,
    ToDoListComponent,
    ServiceComponent,
    GetDomComponent,
    CommunicationComponent,
    LifecycleComponent,
    LifecycleChildComponent,
    CodeComponent,
    RouterComponent,
    OrderHomeComponent,
    PcontentComponent,
    HtmlHandlePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    StorageService,
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
