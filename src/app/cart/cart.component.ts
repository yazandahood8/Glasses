import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart2Service } from '../cart2.service';
import{Users2Service} from '../users2.service'



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items=[];
  len:number=0;
  totalPrice:number=0;
  UserName:string='';
  isBuy:number=0;
  User:any;
  U:string='';

  constructor(private cartService: Cart2Service,private actRoute : ActivatedRoute,private userService: Users2Service) { }
  ngOnInit(): void {
    this.U=this.actRoute.snapshot.params['name'];
    this.userService.getUser(this.U).subscribe((data) => {
      this.User = data;
      this.UserName=this.User.Email;
        
 
 
      })   

    this.Refresh();

  }
  
  Refresh(){
    this.len=0;
    this.totalPrice=0;
    this.cartService.getCart().subscribe((data) => {
      this.items = data;
      for(let i of this.items){
        console.log(i.UserID);
        this.totalPrice+=i.Price;

        if(i.UserID==this.UserName)
           this.len++;

      }


     })   
  }
  remove(id){
    if(this.isBuy==0)
              window.alert('item is deleted');
          console.log(id);

    this.cartService.delete(id).subscribe((data)=> {
      this.Refresh();

      
    });
    


 
  }
  buy(){
    window.alert('Thanks for shopping');
  this.isBuy=1;
   
      for(let i=0;i<this.items.length;i++){
       this.remove(this.items[i]._id)
    }
    this.isBuy=0;

  //   this.cartService.clearCart();
    
    this.totalPrice=0;
  }

}
