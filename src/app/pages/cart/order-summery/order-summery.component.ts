import { Component, computed, inject } from '@angular/core';
import { CartComponent } from '../cart.component';
import { CartService } from '../../../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-order-summery',
  imports: [PrimaryButtonComponent],
  templateUrl: './order-summery.component.html',
  styleUrl: './order-summery.component.css'
})
export class OrderSummeryComponent {
  cartService = inject(CartService);

  total = computed(() => {
    let total = 0;

    for(const item of this.cartService.cart()) {
      total += item.price;
    }

    return total;
  })
  
}
