import { Action, ADD_TO_CART } from '../actions/cart.actions';
import { Product } from '../services/product';

export class CartState {
  cart: Product[];
}

export function cartReducer(state: Product[], action: Action): Product[] {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
}
