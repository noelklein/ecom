import { Product } from '../services/product';
import { CartService } from '../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public products: Product[];

  constructor(cartService: CartService) {
    this.products = cartService.getProducts();
  }

}