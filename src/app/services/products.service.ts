import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Product } from './product';
import { SearchResult } from './result';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<SearchResult<Product>> {
    return this.http.get<SearchResult<Product>>('http://34.212.24.152:8090/api/v1/products?sortColumn=name&pageSize=999&pageNumber=1');
  }
}
