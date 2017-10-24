import { Component } from '@angular/core';
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

  constructor(productsService: ProductsService) {
    this.products = productsService
      .getProducts()
      .map(response => response.results);
  }
}
