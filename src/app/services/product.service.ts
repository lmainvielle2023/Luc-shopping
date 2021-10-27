import { Injectable } from '@angular/core';

import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
    products: Product[] = [
      new Product(1, 'product 1', 'this  product is cool!', 10),
      new Product(2, 'product 2', 'this  product is cool!', 15),
      new Product(3, 'product 3', 'this  product is cool!', 20),
      new Product(4, 'product 4', 'this  product is cool!', 25),
      new Product(5, 'product 5', 'this  product is cool!', 30),
      new Product(6, 'product 6', 'this  product is cool!', 35),
      new Product(7, 'product 7', 'this  product is cool!', 40)
    ]
  constructor() { }

  getProducts(): Product[]{
     //TODO: populate products from API?
    return this.products
  }
}
