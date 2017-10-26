import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Category } from './category';
import { Product } from './product';
import { SearchResult } from './result';

@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<SearchResult<Product>> {
    return this.httpClient.get<SearchResult<Product>>(
      'http://localhost:3000/api/v1/products?sortColumn=name&pageSize=999&pageNumber=1&categories=1,2,3'
    );
  }

  public getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(
      'http://localhost:3000/api/v1/productCategories'
    );
  }

  public getProduct(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(
      `http://localhost:3000/api/v1/products/${productId}`
    );
  }
}
