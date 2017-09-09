import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ShareService } from '../share/share.service';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent implements OnInit {
  formModule:FormGroup;


  constructor(private getService:ShareService) {
    let db = new FormBuilder();
    this.formModule = db.group({
    	product_name:'',
    	price: null,
    	star: 'null',
    	description: '',
    	assort: ''
    })

  }

  ngOnInit() {
     
  }
  onAddProd(){
  	 this.getService.addProduct(this.formModule.value).subscribe(data=>console.log(data))
  }

}
