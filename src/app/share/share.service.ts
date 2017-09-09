import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ShareService {
  constructor(private http: HttpClient) { }
  getProduct():any{
      return this.http.get(`http://localhost:4300/php-demo/product/product_list.php`)
                      
                      // .subscribe(data=> console.log(data))
  }
  getLogin(username:string,password:string){
      var body = {'username':username,'password':password};
      var postdata = this.transFormRequestJson(body);
      return this.http.post(`http://localhost:4300/php-demo/login.php`,postdata,{headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded;charset=UTF-8')})
  } 


  private handleError(error: any):Promise<any>{
      console.log('an error occured',error);
      return Promise.reject(error.message || error);
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

}
