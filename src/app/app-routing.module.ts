import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProdectDetailsComponent } from './prodect-details/prodect-details.component';
import { ProdectsShowComponent } from './prodects-show/prodects-show.component';
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'Login'},

  {path: 'Home/:name', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Cart/:name', component: CartComponent},
  {path: 'ProdectsShow/:name', component: ProdectsShowComponent},
  {path:'ProdectsShow/:name/:prodect',component:ProdectDetailsComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'about/:name', component: ContactsComponent},
  {path: 'AddProduct/:name', component: AddProductComponent},
  {path:'ProdectsShow/edit/:name/:prodect',component:EditProductComponent},


  {path: '**', component: PagenotfoundComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
