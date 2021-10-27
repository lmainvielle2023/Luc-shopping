
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product'
import { filter, map } from 'rxjs/operators';
import { CartItem } from 'src/app/models/cart-item';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Array<CartItem> = [
    //{ id: 1, productId: 1, productName: 'test1', qty: 4, price: 20},
    //{ id: 2, productId: 3, productName: 'test3', qty: 5, price: 25},
    //{ id: 3, productId: 2, productName: 'test2', qty: 3, price: 20},
    //{ id: 4, productId: 4, productName: 'test4', qty: 2, price: 35}
  ];

  cartTotal = 0
  constructor(private  msg:  MessengerService) { }

  ngOnInit() {
    
    this.msg.getMsg().pipe(
      filter((event): event is Product => event instanceof Product)
    ).subscribe(event => {
      
      this.addProductToCart(event)
    });
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
  }
}
