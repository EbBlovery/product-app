import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ShareService {
  constructor(private http: HttpClient) { }
  // login(username:string,password:string): Promise<any>{
  // 	 return this.http.post(this.productUrl,{"username":username,"password":password})
  // 	        .toPromise()
  // 	        .then(res=> res.json())
  // 	        // .catch(this.handleError);
  // }
  getProduct():any{
      return this.http.get(`http://localhost:4300/php-demo/product/product_list.php`)
                      
                      // .subscribe(data=> console.log(data))
  }

  private handleError(error: any):Promise<any>{
      console.log('an error occured',error);
      return Promise.reject(error.message || error);
  }

}
