import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ShareService {
  private productUrl = `http:\/\/localhost/php-demo/login.php`;
  constructor(private http: Http) { }
  login(username:string,password:string): Promise<any>{
  	 return this.http.post(this.productUrl,{"username":username,"password":password})
  	        .toPromise()
  	        .then(res=> res.json())
  	        // .catch(this.handleError);
  }

  private handleError(error: any):Promise<any>{
      console.log('an error occured',error);
      return Promise.reject(error.message || error);
  }

}
