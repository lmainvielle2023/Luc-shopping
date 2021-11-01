import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { MessengerService } from './messenger.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Array<CartItem> = [
  ];

  cartTotal = 0;
  constructor(private  msg:  MessengerService) { }
  getCartItems(){
    console.log("Calling get Cart Items");
    console.log(this.cartItems);
    return this.cartItems;
  }

  getCartTotal(){
    return this.cartTotal;
  }

  addProductToCart(product: Product) {
    
    let productExists  = false

    for(let i in this.cartItems){
      if(this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }
    if(!productExists){
      this.cartItems.push({
        id: product.id,
        productId: product.id,
        productName: product.name, 
        qty: 1,
        price: product.price
      })
    }

    this.cartTotal = 0
    this.cartItems.forEach(item =>  {
      this.cartTotal += (item.qty * item.price)
    })
    console.log(this.cartTotal);
    console.log(this.cartItems);
  }
}