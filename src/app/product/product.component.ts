import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private product:Product[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit():any {
      this.http.get('http://localhost:4300/php-demo/product/product_list.php')
               .subscribe(data => this.product = data)
  }
}


export class Product{
	assort: string,
	description: string,
	id: number,
	price: number,
	product_name: string,
	star: number
}
