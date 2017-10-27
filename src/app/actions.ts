import { Product } from './services/product';

export const ADD_TO_CART = '[cart] add product to cart';
export const REMOVE_FROM_CART = '[cart] remove product from cart';

export class AddProductToCartAction {
  public type = ADD_TO_CART;
  constructor(public payload: Product) {}
}
export class RemoveProductFromCart {
  public type = REMOVE_FROM_CART;
  constructor(public payload: number) {}
}

export type Action = AddProductToCartAction | RemoveProductFromCart;
