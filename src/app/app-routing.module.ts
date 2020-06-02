/*
 * @Author: YZY
 * @Date: 2020-04-28 15:40:18
 * @LastEditTime: 2020-05-21 15:18:15
 * @FilePath: /angulardemo/src/app/app-routing.module.ts
 * @Description: 
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TemplatesComponent } from './views/templates/templates.component';
import { FormsComponent } from './views/forms/forms.component';
import { ToDoListComponent } from './views/to-do-list/to-do-list.component';
import { ServiceComponent } from './views/service/service.component';
import { GetDomComponent } from './views/get-dom/get-dom.component';
import { CommunicationComponent } from './views/communication/communication.component';
import { LifecycleComponent } from './views/lifecycle/lifecycle.component';
import { RouterComponent } from './views/router/router.component';
import { OrderHomeComponent } from './views/orderSystem/order-home/order-home.component';
import { PcontentComponent } from './views/orderSystem/pcontent/pcontent.component';

const routes: Routes = [
	// {path: 'home', component: HomeComponent},
	// {path: 'home/:id', component: HomeComponent},
	{
		path: 'home',
		component: HomeComponent,
		children: [{
			path: 'forms',
			component: FormsComponent,
		}, {
			path: 'to-do-list',
			component: ToDoListComponent,
		}]
	},
	{path: 'templates', component: TemplatesComponent},
	{path: 'forms', component: FormsComponent},
	{path: 'to-do-list', component: ToDoListComponent},
	{path: 'service', component: ServiceComponent},
	{path: 'get-dom', component: GetDomComponent},
	{path: 'communication', component: CommunicationComponent},
	{path: 'life-cycle', component: LifecycleComponent},
	{path: 'router', component: RouterComponent},
	{path: 'order/home', component: OrderHomeComponent},
	{path: 'order/detail/:id', component: PcontentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
