import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-prodects',
  templateUrl: './navbar-prodects.component.html',
  styleUrls: ['./navbar-prodects.component.css']
})
export class NavbarProdectsComponent implements OnInit {

  prodectsList : any =[
    {number:292100,course:"Sunglasses"},
    {number:292101,course:"Eyeglasses"},
    {number:292102,course:"Contact Lenses"},
    {number:292103,course:"Accessories"},
    ]

    selectedType:string="Sunglasses";
  showComponent:Boolean=true;
  img:string="https://shadesdaddyblog.com/wp-content/uploads/2018/12/Can-I-Add-Prescription-Lens-to-My-Sunglasses_-1.png";
  showSunglassesActive:string="active";
  showEyeglassesActive:string="";
  showContactLensesActive:string="";
  showopticalAccessoriesActive:string="";
  constructor() { }

  ngOnInit(): void {

  }
  
  showSunglasses(){
    this.img="https://shadesdaddyblog.com/wp-content/uploads/2018/12/Can-I-Add-Prescription-Lens-to-My-Sunglasses_-1.png";

    this.selectedType="Sunglasses";
    this.showComponent=true;
    this.showSunglassesActive="active";
    this.showEyeglassesActive="";
    this.showContactLensesActive="";
    this.showopticalAccessoriesActive="";
  }
  showEyeglasses(){
    this.img="data:image/jpeg;base64,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"
    this.selectedType="Eyeglasses";
    this.showComponent=true;
    this.showSunglassesActive="";
    this.showEyeglassesActive="active";
    this.showContactLensesActive="";
    this.showopticalAccessoriesActive="";

   
  }
  
  showContactLenses(){
    this.img="https://thumbs-prod.si-cdn.com/mr_AMjnxZCrMkBYtfNahk_CIpR8=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/ee/6b/ee6b6ab0-84f3-4ebf-a3df-9e202ed9d374/contactlenses.jpg";
    this.selectedType="ContactLenses";
    this.showComponent=true;
    this.showSunglassesActive="";
    this.showEyeglassesActive="";
    this.showContactLensesActive="active";
    this.showopticalAccessoriesActive="";

  }
  opticalAccessories(){
    this.img="https://d3re0f381bckq9.cloudfront.net/47421441_834b5626-073c-4108-a6f9-a36b692529c3_1080x1080.jpg";
    this.selectedType="Accessories";
    this.showComponent=true;
    this.showSunglassesActive="";
    this.showEyeglassesActive="";
    this.showContactLensesActive="";
    this.showopticalAccessoriesActive="active";
    
  }
}
