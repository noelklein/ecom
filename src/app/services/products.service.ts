import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Category } from './category';
import { Product } from './product';
import { SearchResult } from './result';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<SearchResult<Product>> {
    return this.http.get<SearchResult<Product>>(
      'http://localhost:3000/api/v1/products?sortColumn=name&pageSize=999&pageNumber=1&categories=1,2,3'
    );
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      'http://localhost:3000/api/v1/productCategories'
    );
  }
}
