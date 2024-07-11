import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService2Service } from '../products-service2.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Users2Service} from '../users2.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  prodects=[];
   x:number=0;
   UserName:string='';
   u:string='';

   User:any="";

  constructor(private prodectsService: ProductsService2Service,private actRoute : ActivatedRoute,private userService: Users2Service) { }

  ngOnInit(): void {
    this.u=this.actRoute.snapshot.params['name'];

    this.prodectsService.getProducts().subscribe((data) => {
      this.prodects = data;
    
     })   
         this.userService.getUser(this.u).subscribe((data) => {
          this.User = data;
            console.log(this.User);
            this.UserName=this.User.Name;


          })   


  }
  

  count():boolean{
    for(let prodect of this.prodects){
      if(prodect.Id%10%2==0 &&this.x<=5)
        this.x++;
    }
    if(this.x<=5){
      
      return true;
    }
    return false;
  }
  
}
