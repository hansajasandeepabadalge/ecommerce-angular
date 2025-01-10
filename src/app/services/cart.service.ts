import { Injectable, signal } from '@angular/core';
import { product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<product[]>([]);

  addToCart(product: product) {
    this.cart.set([...this.cart(),product]);
  }

  removeFromCart(id: number)  {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() { }
}
