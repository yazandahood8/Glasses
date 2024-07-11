import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name:String="OPTEKA";
  address:String="Shiekh danun , Tamra";
  tel:String="21552";
  constructor() { }

  ngOnInit(): void {
  }

}
