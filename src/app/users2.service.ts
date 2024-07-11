import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Users2Service {
  
  baseUri:string = 'http://localhost:8000/api/';
  headers = {'Content-Type': 'application/json'};

  constructor(private http: HttpClient) { }

 

  // Get all products
  getusers():Observable<any> {
    return this.http.get(this.baseUri + 'users');
  }

  addUser(user):Observable<any>{
    let body=JSON.stringify(user);
    console.log(body);
    return this.http.post(this.baseUri + 'users/create',body,{
      headers:this.headers,
    });
  }
  getUser(id):Observable<any>{
    return this.http.get(this.baseUri + 'users/read/'+id)
  }
}
  

 
  
  