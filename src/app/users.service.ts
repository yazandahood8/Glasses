import { Injectable } from '@angular/core';
@Injectable({
  providedIn:'root'
})
export class UsersService {
  users = [
    {username:'dahood.yazan8@gmail.com',password:'123456789',FullName:'yazan dahood'},
    {username:'mosa@gmail.com',password:'123456789',FullName:'mosa diab'}

  ];

  addToUsers(user) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
  // getUsers(){
  //   return[
  //     {username:'yazandahood',password:'123456789'}
  //   ]

  // }
  constructor() { }

  
}
class User{
  username:string;
  password:string;
  Constructor(username:string,password:string){
    this.username=username;
    this.password=password;


  }
}
