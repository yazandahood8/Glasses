import { Component, OnInit } from '@angular/core';
import{Users2Service} from '../users2.service'
import {Router} from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  users=[];
  err:string="";
 
  constructor(private userService: Users2Service,private route:Router) {
   }

  ngOnInit(): void {
    this.userService.getusers().subscribe((data) => {
      this.users = data;
    
     })   
  }
  onSubmit(loginForm){
    this.err=""
    for(let user of this.users){
      console.log(user.Email);

      if(user.Email==loginForm.value.username&&user.password==loginForm.value.password){
      this.route.navigate(['/Home',user._id]);

        return true;
      }
    }
    window.alert('Please enter correct username,password');

    return false;

   

  }
  

}
