import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Cart2Service {
  
  baseUri:string = 'http://localhost:8000/api/';
  headers = {'Content-Type': 'application/json'};

  constructor(private http: HttpClient) { }

 

  // Get all products
  getCart():Observable<any> {
    return this.http.get(this.baseUri + 'cart');
  }
  
  addToCart(cart):Observable<any>{
    let body=JSON.stringify(cart);
    return this.http.post(this.baseUri + 'cart/create',body,{
      headers:this.headers,
    });
  }
  delete(id):Observable<any>{
    return this.http.delete(this.baseUri + 'cart/delete/'+id)
  }
  
}
  

 
  class Product {
    _id:String;
    SerialNumber:String;
    Name:String;
    Price:number;
    Category:String;
    Description:String;
    ImgUrl:String;
    UserID:String;
   
    constructor( _id:String,SerialNumber:String, Name:String,Price:number,Category:String,Description:String,ImgUrl:String,UserID:String) {
      this._id=_id;

      this.SerialNumber=SerialNumber;
      this.Name=Name;
      this.Price=Price;
      this.Category=Category;
      this.Description=Description;
      this.ImgUrl=ImgUrl;
      this.UserID=UserID;

  
  
    }
  }