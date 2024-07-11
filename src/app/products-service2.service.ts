import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService2Service {
  
  baseUri:string = 'http://localhost:8000/api/';
  headers = {'Content-Type': 'application/json'};

  constructor(private http: HttpClient) { }

 

  // Get all products
  getProducts():Observable<any> {
    return this.http.get(this.baseUri + 'products');
  }
  getProductDetails(id):Observable<any>{
    return this.http.get(this.baseUri + 'products/read/'+id)
  }
  addProduct(product):Observable<any>{
    let body=JSON.stringify(product);
    console.log(body);
    return this.http.post(this.baseUri + 'products/create',body,{
      headers:this.headers,
    });
  }
  UpdateProduct(id,product):Observable<any>{
    let body=JSON.stringify(product);
    console.log(body);
    return this.http.put(this.baseUri + 'products/update/'+id,body,{
      headers:this.headers,
    });
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
    Discount:String;
    time:string;
    UserID:string;
  
    constructor( _id:String,SerialNumber:String, Name:String,Price:number,Category:String,Description:String,ImgUrl:String,Discount:String,time:string,    UserID:string      ) {
      this._id=_id;

      this.SerialNumber=SerialNumber;
      this.Name=Name;
      this.Price=Price;
      this.Category=Category;
      this.Description=Description;
      this.ImgUrl=ImgUrl;
      this.Discount=Discount;
      this.time=time;
      this.UserID=UserID;

  
    }
  }