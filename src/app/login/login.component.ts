import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
// import { ShareService } from '../share/share.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
     private http:HttpClient,
     private router:Router
  ) { 
      
  }

  ngOnInit() {
      
  }
  ngOnChanges() {
      if(this.code == 0){
          console.log(12313131)
      } 
  }
  transFormRequestJson(data:any){
      const str = [];
      for(const k in data){
         if(k){
            str.push(encodeURIComponent(k) + '=' + encodeURIComponent(data[k]));
         }
      }
      return str.join('&');
  }
  onSubmit(){
  	  var body = {'username':this.formModule.value.username,'password':this.formModule.value.password};
      var postdata = this.transFormRequestJson(body);


  	  this.http.post(`http://localhost:4300/php-demo/login.php`,postdata,{headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded;charset=UTF-8')})
  	            .subscribe(data => this.lonkTo(data))
  }
  lonkTo(data:any){
     if(data.code == 0){
     	this.router.navigate(['navbar']);
     	sessionStorage.setItem('token',data.token)
     }
  }
}

export class LoginData {
     code: number;
     token: string
}
//