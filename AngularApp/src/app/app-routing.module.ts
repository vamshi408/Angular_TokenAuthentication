import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path: 'dashboard', component: DashboardComponent, 
  children:[{path:'demo',component:DemoComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
