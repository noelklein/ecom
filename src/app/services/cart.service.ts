import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable()
export class CartService {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  public add(product: Product): void {
    this.products.push(product);
  }

  public getProducts(): Product[] {
    return this.products;
  }
}
