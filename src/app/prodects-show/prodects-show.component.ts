import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarProdectsComponent } from '../navbar-prodects/navbar-prodects.component';

@Component({
  selector: 'app-prodects-show',
  templateUrl: './prodects-show.component.html',
  styleUrls: ['./prodects-show.component.css']
})
export class ProdectsShowComponent implements OnInit {
  @ViewChild(NavbarProdectsComponent) ProductsList: NavbarProdectsComponent
  UserName:String='';
  constructor(private actRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.UserName=this.actRoute.snapshot.params['name'];

  }
  

}
