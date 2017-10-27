import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

import { Product } from './product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {
  private products: BehaviorSubject<Product[]>;

  constructor() {
    this.products = new BehaviorSubject([]);
  }

  public add(product: Product): void {
    this.products.take(1).subscribe(products => {
      this.products.next([...products, product]);
    })
  }

  public getProducts(): Observable<Product[]> {
    return this.products;
  }

  public getTotalAmount(): Observable<number> {
    return this.products.map(products => products.reduce((total, product) => total + product.price, 0));
  }
}
