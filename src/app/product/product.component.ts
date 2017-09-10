import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../share/share.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:any;
  
  private show:boolean = false;

  changeProduct: any;

  constructor(
    // private http:HttpClient,
    private getService: ShareService
  ) { }

  ngOnInit():any {
      this.getService.getProduct().subscribe(data=> this.product = data)
  }
  handleSave(){
     alert('wrwerwr')
  }
  handleDelete(item){
     
  }
  isShow(val){
      this.show = val;
  }
  handleChange(item:any){
      this.show = !this.show;
      this.changeProduct = item;
  }
}



// interface Product{
// 	assort: string,
// 	description: string,
// 	id: number,
// 	price: number,
// 	product_name: string,
// 	star: number
// }
