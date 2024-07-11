import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ObjectId } from 'mongodb';
import { ProductsService2Service } from '../products-service2.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:prodect;
  x:number;
 



  constructor(private prodectsService: ProductsService2Service) { }

  ngOnInit(): void {
  }
  onSubmit(loginForm){
    
    this.x=Math.random() * (9999999 - 1000000) + 1000000;


    console.log("yess");
    console.log(loginForm.value.Name);
    this.product = new prodect(loginForm.value.Name,loginForm.value.Price,loginForm.value.Category,loginForm.value.Description,
      loginForm.value.ImgUrl,loginForm.value.Discount,loginForm.value.time);
    this.prodectsService.addProduct(this.product).subscribe((data)=> {
    });

  }
  

}
class prodect {
  _id:String;
  SerialNumber:String;
  Name:String;
  Price:number;
  Category:String;
  Description:String;
  ImgUrl:String;
  Discount:String;
  time:string;
  static ss:number= 20;

  

  constructor(Name:String,Price:number,Category:String,Description:String,ImgUrl:String,Discount:String,time:string) {
    const min = Math.ceil(1000000);
    const max = Math.floor(9999999);
    const x=Math.floor(Math.random() * (max - min) + min);

    this._id="60ba"+x+"ad3333876ce00";
    prodect.ss++;

    this.SerialNumber=prodect.ss+"";
    this.Name=Name;
    this.Price=Price;
    this.Category=Category;
    this.Description=Description;
    this.ImgUrl=ImgUrl;
    this.Discount=Discount;
    this.time=time;


  }
}
