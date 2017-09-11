import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';
import { AddprodComponent } from './addprod/addprod.component';
import { ChartComponent } from './chart/chart.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorComponent } from './error/error.component';



const routes: Routes = [
   {path: '',redirectTo: '/login', pathMatch: 'full'},
   {path: 'login', component: LoginComponent},
   {
   	  path: 'navbar',
   	  component: NavbarComponent,
   	  children: [{
          path: 'homepage',
          component: HomepageComponent
      },{
          path: 'admin',
          component: AdminComponent
      },{
          path: 'product',
          component: ProductComponent
      },{
      	  path: 'addprod',
          component: AddprodComponent
      },{
          path: 'chartlist',
          component: ChartComponent
      }]
   },{
      path: 'register',
      component: RegisterComponent
   },{
      path:"**",
      component: ErrorComponent
   }
];
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}