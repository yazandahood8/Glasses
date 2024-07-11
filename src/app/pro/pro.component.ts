import { Component, OnInit,Input } from '@angular/core';
import { Cart2Service } from '../cart2.service';
import { ActivatedRoute } from '@angular/router';

import { ProductsService2Service } from '../products-service2.service';
import{Users2Service} from '../users2.service'
import {Router} from '@angular/router'; // import router from angular router


@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {
  prodects:any=[];
  cart:any=[];

  @Input() selectedType;
  static x:number=1;

  UserName:String='member';
  u:String='';
  User:any="";
  constructor(private prodectsService: ProductsService2Service, private route: ActivatedRoute,private cartService: Cart2Service,private userService: Users2Service,private route2:Router) { 
     

  }

  ngOnInit(): void {
    this.prodectsService.getProducts().subscribe((data) => {
      this.prodects = data;
    
     })   
     this.cartService.getCart().subscribe((data) => {
      this.cart = data;
    
     })   
    
    this.u=this.route.snapshot.params['name'];
    this.userService.getUser(this.u).subscribe((data) => {
     this.User = data;
       console.log(this.User);
       if(this.User.Email=="dahood.yazan8@gmail.com"){
           this.UserName="admin";
       }


     })   
  }
  addCart(product) {
    
    for(let i of this.cart){
      console.log(i.UserID+"  "+this.User.Email);
      console.log(i.Name+"  "+product.Name);

      if(i.UserID==this.User.Email&&i.Name==product.Name){
        window.alert('product is already in cart');

        return;
    }
  }
    product.UserID=this.User.Email;
    product._id=ProComponent.x;
    ProComponent.x++;

    this.cartService.addToCart(product).subscribe((data)=> {
      this.cartService.getCart().subscribe((data) => {
        this.cart = data;
      
       })   

    });
   
   window.alert('Your product has been added to the cart!');
  }
  cc():void{
    this.route2.navigate(['/AddProduct',this.User._id]);

    
  }
  
  
}

