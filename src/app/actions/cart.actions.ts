import { Product } from '../services/product';

export const ADD_TO_CART = '[cart] add to cart';

export class AddToCartAction {
  public type = ADD_TO_CART;
  constructor(public payload: Product) {}
}

export type Action = AddToCartAction;
