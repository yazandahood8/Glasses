import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService2Service } from '../products-service2.service';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-prodect-details',
  templateUrl: './prodect-details.component.html',
  styleUrls: ['./prodect-details.component.css']
})
export class ProdectDetailsComponent implements OnInit {
  baseUri:string = 'http://localhost:8000/api/';
  headers = {'Content-Type': 'application/json'};
  ProdectName:String;
  currentProdect:any;
  prodect: any [];
  constructor( private prodectsService:ProductsService2Service ,private actRoute : ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {

    this.ProdectName=this.actRoute.snapshot.params['prodect'];
    console.log(this.ProdectName);

    this.prodectsService.getProductDetails(this.ProdectName).subscribe((data) => {
      this.currentProdect = data;
        console.log(this.currentProdect);
      })   

  
  }
  // searchSeries(){
  //   console.log(this.ProdectName);
  //   for(let i of this.prodect){
  //     if(this.ProdectName==i._id){
       
          
  //       // console.log("yes");
  //       // this.currentProdect=i;
  //       return;
  //     }
  //   }
  // }
  
  

}