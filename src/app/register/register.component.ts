import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ShareService } from '../share/share.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formModule:FormGroup = new FormGroup({
  	 username: new FormControl(''),
  	 password: new FormControl(''),
  	 pconfig: new FormControl('')
  });

  private isSecrectTrue:boolean = false;
  private isAdminTrue:boolean = false;

  constructor(
  	private getService:ShareService,
  	private router:Router
  ) { }

  ngOnInit() {

  }
  onSubmit(){
      this.getService.getRegister(this.formModule.value).subscribe(data=> this.isRouterLogin(data));
  }
  isRouterLogin(data:any){
      if(data.code === 0){
      	 alert('注册完成');
         this.router.navigate(['login']);
      }else if(data.code === 1){
         this.isSecrectTrue = true;
      }else if(data.code === 2){
         this.isAdminTrue = true;
      }else{
      	 alert('error');
      }
  }
}
