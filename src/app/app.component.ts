import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';

import { Product } from './services/product';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public products: Observable<Product[]>;
  public categoryFilter: BehaviorSubject<number[]>;

  constructor(productsService: ProductsService) {
    this.categoryFilter = new BehaviorSubject([]);
    this.products = productsService
      .getProducts()
      .map(response => response.results);
  }

  public filterChanged(categoryIds: number[]) {
    this.categoryFilter.next(categoryIds);
  }
}
