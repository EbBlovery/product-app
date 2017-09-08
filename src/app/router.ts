import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';
import { AddprodComponent } from './addprod/addprod.component';

const routes: Routes = [
   {path: '',redirectTo: '/login', pathMatch: 'full'},
   {path: 'login', component: LoginComponent},
   {
   	  path: 'navbar',
   	  component: NavbarComponent,
   	  children: [{
   	  	  path: 'navbar/*',
   	  	  redirectTo: '/navbar/admin'
   	  },{
          path: 'admin',
          component: AdminComponent
      },{
          path: 'product',
          component: ProductComponent
      },{
      	  path: 'addprod',
          component: AddprodComponent
      }]
   }
];
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}