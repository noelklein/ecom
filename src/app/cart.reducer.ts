import { Action, ADD_TO_CART, REMOVE_FROM_CART } from './actions';
import { Product } from './services/product';

export interface CartState {
  cart: Product[];
}

export function cartReducer(products: Product[], action: Action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...products, action.payload];

    case REMOVE_FROM_CART:
      return products.filter(p => p.productId === action.payload);
    default:
      return products;
  }
}
