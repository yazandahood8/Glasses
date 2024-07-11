import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  UserName:string='';
  constructor(private actRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.UserName=this.actRoute.snapshot.params['name'];
  //  console.log( this.UserName);

  }

}
