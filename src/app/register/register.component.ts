import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users2Service } from '../users2.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users:User;
  users1;


  constructor(private route: Router,private userService: Users2Service) { 
    
  }

  ngOnInit(): void {
  this.userService.getusers().subscribe((data) => {
    this.users1 = data;
  
   })   
  }
  onSubmit(loginForm){
    

    for(let i of this.users1){
      if(i.Email==loginForm.value.username){
        window.alert('user is already registered');

        return;
    }
  }
 let id= this.users1.length;
    this.users = new User(id,loginForm.value.FullName, loginForm.value.username,loginForm.value.password);
    this.userService.addUser(this.users).subscribe((data)=> {
    });
  window.alert('Successful registration');
  this.userService.getusers().subscribe((data) => {
    this.users1 = data;
  
   })   

    this.route.navigate(['/Login']);

  }

}
class User {
  _id:String;
  Name:String;
  Email:String;
  password:String;
  

  constructor(_id:String, Name:String,Email:String,password:string) {
    this._id=_id;
    this.Email=Email;
    this.Name=Name;
    this.password=password;
  }
}
