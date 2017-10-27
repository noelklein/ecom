import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AddToCartAction } from '../actions/cart.actions';
import { CartState } from '../reducers/cart.reducer';
import { Product } from './product';

@Injectable()
export class CartService {
  constructor(private store: Store<CartState>) {}

  public add(product: Product): void {
    this.store.dispatch(new AddToCartAction(product));
  }

  public getProducts(): Observable<Product[]> {
    return this.store.select(store => store.cart);
  }

  public getTotalAmount(): Observable<number> {
    return this.store.select(state =>
      state.cart.reduce((total, product) => total + product.price, 0)
    );
  }
}
