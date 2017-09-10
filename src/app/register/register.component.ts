import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ShareService } from '../share/share.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formModule:FormGroup = new FormGroup({
  	 username: new FormControl(''),
  	 password: new FormControl('')
  });
  constructor(private getService:ShareService) { }

  ngOnInit() {
  }
  onSubmit(){
      this.getService.getRegister(this.formModule.value).subscribe(data=> console.log(data));
  }
}
