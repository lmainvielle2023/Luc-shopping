import { Component, OnInit } from "@angular/core";
import { CartItem } from "src/app/models/cart-item";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})

export class cartCheckout implements OnInit {
  

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}