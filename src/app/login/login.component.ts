import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
// import { ShareService } from '../share/share.service';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShareService } from '../share/share.service';


interface Person {
    code: number;
    token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {
  
  private code:number;
  private token:string;


  formModule:FormGroup = new FormGroup({
  	 username: new FormControl(''),
  	 password: new FormControl('')
  });
  constructor(
     private getService:ShareService,
     private router:Router
  ) { }
  ngOnInit() {
      
  }
  ngOnChanges() {

  }
  onSubmit(){
      this.getService.getLogin(this.formModule.value.username,this.formModule.value.password).subscribe(data => this.lonkTo(data))
  }
  lonkTo(data:any){
     if(data.code == 0){
      let navigationExtras: NavigationExtras = {
        queryParams: { 'name': data.name }
      };
     	this.router.navigate(['navbar/admin'],navigationExtras);
     	sessionStorage.setItem('token',data.token);
      sessionStorage.setItem('name',data.name);

      console.log(data)
     }
  }
}

export class LoginData {
     code: number;
     token: string
}
//