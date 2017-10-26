import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/switchMap';

import { Product } from '../services/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  public product: Observable<Product>;

  constructor(route: ActivatedRoute, productsService: ProductsService) {
    this.product = route.params.switchMap(params => {
      const productId = params['productId'];
      return productsService.getProduct(productId);
    });
  }
}
