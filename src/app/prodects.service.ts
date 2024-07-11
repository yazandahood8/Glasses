import { Injectable,Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdectsService {
  @Input() selectedCourse;


  getProdects(){
    return[
      new prodect( "01","LUPO1568",350,"Sunglasses","High-quality and fashionable sunglasses from the LUPO brand, the lenses made of polycarbonate material filter 100% UV400.","https://d3m9l0v76dty0.cloudfront.net/system/photos/5616222/large/601a60686f75edc46e04733bff9ad54e.jpg","yes",""),
      new prodect("02","JUST CAVALLI",500,"Sunglasses","Fashionable sunglasses for women by designer JUST CAVALLI. Model 405. Black plastic frame with graded brown lenses.","https://d3m9l0v76dty0.cloudfront.net/system/photos/432449/large/8a6c8f0b929740abc7cba88c4d454aaf.jpg","no",""),
      new prodect("03","GUCCI",1200,"Sunglasses","Fashionable sunglasses for women by Gucci model 4263 metal frame in gold and black. Quantity in stock - 1","https://d3m9l0v76dty0.cloudfront.net/system/photos/662199/large/82250bc92e15ff45d040a4ce74c9ef19.jpg","no","new"),
      new prodect("04","GG4200",1250,"Sunglasses","Gucci fashionable sunglasses for women, model 4200, gray-blue frame with a silver Gucci emblem.","https://d3m9l0v76dty0.cloudfront.net/system/photos/432433/large/46718f205e8e9932371ef13b6986fac3.jpg","no",""),
      new prodect("05","VOGUE 5211-",350,"Sunglasses","VOGUE sunglasses, model VO5211-S, color 260580. A new Vogue collection. Mottled brown plastic frame and gray lenses.","https://d3m9l0v76dty0.cloudfront.net/system/photos/3777343/large/7baacc1a76de27c172e979a48c3d6293.jpg","yes",""),
      new prodect("06","RAY BAN 6389",495,"Eyeglasses","RAY BAN frame 6389 color 2500. Size 55-16. Gold square pilot frame.","https://d3m9l0v76dty0.cloudfront.net/system/photos/2730797/large/866eb617f9da77d78b2de344d2f5bca5.jpg","yes",""),
      new prodect("07","RAY BAN 8747",720 ,"Eyeglasses","RAY BAN Vision Frame Model 8747 Color 1002. Size 48-18. Round frame glasses and silver rods.","https://d3m9l0v76dty0.cloudfront.net/system/photos/2730831/large/8218940137f5cc27715f0906772e2ae2.jpg","no",""),
      new prodect("08","RAY BAN 7088",570 ,"Eyeglasses","RAY BAN frame of view model 7088 color 2012. Size 52-18. Cat plastic frame in mottled color.","https://d3m9l0v76dty0.cloudfront.net/system/photos/2730989/large/ca92ef3a68eff299f1419973c15c2435.jpg","no","new"),
      new prodect("09","RAY BAN 8416",720,"Eyeglasses","RAY BAN frame 8416 color 2914. Size 53-17. Blue metal frame.","https://d3m9l0v76dty0.cloudfront.net/system/photos/2731024/large/f5fff11b4f7c145fb765ab2e85becfbd.jpg","no",""),
      new prodect("10","RAY BAN 6375",495 ,"Eyeglasses","RAY BAN frame, model 6375, color 2950. Size 53-18. A very modern metal frame, with a blue front and yellow rods","https://d3m9l0v76dty0.cloudfront.net/system/photos/2908322/large/4d5539f3ed5071eadb78d369c010b08a.jpg","no","new"),
      new prodect("11"," Johnson & Johnson",99  ,"ContactLenses","30 daily soft lenses from Johnson & Johnson.  Day ACUVUE® MOIST contact lenses are soft, thin and flexible lenses.","https://d3m9l0v76dty0.cloudfront.net/system/photos/5860959/large/bc39e0d39c9f9e635e2f8f1f5949739e.jpg","no",""),
      new prodect("12","One Day Acuvue Moist 90",279  ,"ContactLenses","Jhonson and Jhonson Daily Moist Contact Lenses. A savings package that includes 90 lenses.","https://d3m9l0v76dty0.cloudfront.net/system/photos/4633942/large/d68c54dbfffd35a907156ed3f2276923.jpg","yes",""),
      new prodect("13"," Astigmatism 30pck",170 ,"ContactLenses","120 daily soft lenses from Johnson & Johnson.Day 1- Day ACUVUE® MOIST contact lenses are soft lenses,","https://d3m9l0v76dty0.cloudfront.net/system/photos/5861048/large/7ffe090ea3b72f6660756c19ce50ec8a.jpg","no",""),
      new prodect("14","Alcon Dailies Total",366  ,"ContactLenses","Total 1 lenses are one of the best and most advanced silicone hydrogel daily lenses in the world, thanks to revolutionary technology the lenses provide exceptional comfort.","https://d3m9l0v76dty0.cloudfront.net/system/photos/6109084/large/25c2fd281190f0f7837627252e5ae043.jpg","no","new"),
      new prodect("15","Biotrue ONEday 30pck ",129  ,"ContactLenses","30 daily lenses from Bausch & Lomb ","https://d3m9l0v76dty0.cloudfront.net/system/photos/2390046/large/95b3561b37d0fe5ec763c0cf491823e5.jpg","no",""),
      new prodect("16","Fashionable eyewear necklace",49,"Accessories","Haim we did not think this trend would return: the glasses necklaces from the nineties are curling the thread that connects the frame of the glasses was popular more than two decades ago.","https://www.opticana.co.il/pub/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/2/1/211110.jpg","no",""),
      new prodect("17","Anti-fog cloth",20 ,"Accessories","For anyone asking how to prevent fumes in glasses. Opticana offers a solution, a high-quality microfiber cloth to prevent steam.","https://www.opticana.co.il/pub/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/2/2/220070f.jpg","yes",""),
      new prodect("18","CLEAR ALL",89 ,"Accessories","Multi-purpose soaking and storage solution for soft contact lenses of all types.Contains a protein removal agent.","https://www.opticana.co.il/pub/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/5/4/549017f.jpg","no","new"),
      new prodect("19","EVER CLEAN 45",89,"Accessories","Solution for cleaning, disinfecting and removing proteins and infections for all types of lenses.No rubbing and no preservatives.","https://www.opticana.co.il/pub/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/5/4/549019f.jpg","no",""),
      new prodect("20","UNICA SENSITIVE",70,"Accessories","Is a multi-purpose solution for all types of soft contact lenses. Performs the rinsing, disinfection and storage operations in one operation.","https://www.opticana.co.il/pub/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/5/4/549026f.jpg","no",""),


    ]
  }
  
}
class prodect {
  SerialNumber:String;
  Name:String;
  Price:number;
  Category:String;
  Description:String;
  ImgUrl:String;
  Discount:String;
  time:string;

  constructor(SerialNumber:String, Name:String,Price:number,Category:String,Description:String,ImgUrl:String,Discount:String,time:string) {

    this.SerialNumber=SerialNumber;
    this.Name=Name;
    this.Price=Price;
    this.Category=Category;
    this.Description=Description;
    this.ImgUrl=ImgUrl;
    this.Discount=Discount;
    this.time=time;


  }
}