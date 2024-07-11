import { Component, OnInit } from '@angular/core';
import { ProductsService2Service } from '../products-service2.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { ObjectId } from 'mongodb';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
  
})
export class EditProductComponent implements OnInit {
  baseUri:string = 'http://localhost:8000/api/';
  headers = {'Content-Type': 'application/json'};
  ProdectName:String;
  currentProdect:any;
  prodect: any [];
  GlassName: string="sfa";
  product:prodect;


  constructor( private prodectsService:ProductsService2Service ,private actRoute : ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    

    this.ProdectName=this.actRoute.snapshot.params['prodect'];
  //  console.log(this.ProdectName);


    this.prodectsService.getProductDetails(this.ProdectName).subscribe((data) => {
      this.currentProdect = data;
        console.log(this.currentProdect);
      })   
    }
    

  onSubmit(loginForm){
    
    this.product = new prodect(this.currentProdect._id,this.currentProdect.SerialNumber,loginForm.value.Name,loginForm.value.Price,loginForm.value.Category,loginForm.value.Description,
      loginForm.value.ImgUrl,loginForm.value.Discount,loginForm.value.time);
    this.prodectsService.UpdateProduct(this.currentProdect._id,this.product).subscribe((data)=> {
    });


  }

}
class prodect {
  _id:ObjectId;
  SerialNumber:String;
  Name:String;
  Price:number;
  Category:String;
  Description:String;
  ImgUrl:String;
  Discount:String;
  time:string;

  

  constructor(_id:ObjectId,SerialNumber:String,Name:String,Price:number,Category:String,Description:String,ImgUrl:String,Discount:String,time:string) {
    
    this._id=_id;

    this.SerialNumber=SerialNumber;
    this.Name=Name;
    this.Price=Price;
    this.Category=Category;
    this.Description=Description;
    this.ImgUrl=ImgUrl;
    this.Discount=Discount;
    this.time=time;


  }
}
