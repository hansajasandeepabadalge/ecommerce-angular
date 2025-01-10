import { Component, inject } from '@angular/core';
import { CartItemComponent } from './cart-item/cart-item.component'; 
import { CartService } from '../../services/cart.service';
import { ButtonComponent } from "../../components/button/button.component";
import { OrderSummeryComponent } from './order-summery/order-summery.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent,OrderSummeryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  [x: string]: any;

  cartService = inject(CartService)
}
