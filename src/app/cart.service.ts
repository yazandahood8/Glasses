import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }
  deleteFromCart(id) {
    this.items.splice(id,1);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    for(let it of this.items)
      this.items.pop();
  
  }
}