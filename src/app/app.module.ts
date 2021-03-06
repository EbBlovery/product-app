import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './router';

import { ShareService } from './share/share.service';

import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';
import { AddprodComponent } from './addprod/addprod.component';
import { ProChangeComponent } from './pro-change/pro-change.component';
import { ChartComponent } from './chart/chart.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorComponent } from './error/error.component';
import { MenubarComponent } from './menubar/menubar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AdminComponent,
    ProductComponent,
    AddprodComponent,
    ProChangeComponent,
    ChartComponent,
    RegisterComponent,
    HomepageComponent,
    ErrorComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
