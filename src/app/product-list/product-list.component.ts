import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

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
  public categoryFilter: BehaviorSubject<number[]>;

  constructor(productsService: ProductsService) {
    this.categoryFilter = new BehaviorSubject([]);
    this.products = this.categoryFilter.switchMap(categories =>
      productsService.getProducts(categories).map(response => response.results)
    );
  }

  public filterChanged(categoryIds: number[]) {
    this.categoryFilter.next(categoryIds);
  }
}
