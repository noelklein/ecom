import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AddProductToCartAction } from '../actions';
import { CartState } from '../cart.reducer';
import { Product } from './product';

@Injectable()
export class CartService {
  constructor(private store: Store<CartState>) {}

  public add(product: Product): void {
    this.store.dispatch(new AddProductToCartAction(product));
  }

  public getProducts(): Observable<Product[]> {
    return this.store.select(cartState => cartState.cart);
  }

  public getTotalAmount(): Observable<number> {
    return this.store.select(cartState =>
      cartState.cart.reduce((total, product) => total + product.price, 0)
    );
  }
}
