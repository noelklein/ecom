import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { Product } from '../services/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  public products: Observable<Product[]>;
  private categories: BehaviorSubject<number[]>;

  constructor(productsService: ProductsService) {
    this.categories = new BehaviorSubject([]);

    this.products = this.categories
      .switchMap(categories => {
        return productsService
          .getProducts(categories)
          .map(response => response.results);
      });
  }

  public changeSelectedCategories(categories: number[]) {
    this.categories.next(categories);
  }
}
