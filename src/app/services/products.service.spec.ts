import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { anyString, instance, mock, verify, when } from 'ts-mockito';

import { Product } from './product';
import { ProductsService } from './products.service';
import { SearchResult } from './result';

describe('ProductsService', () => {
  let mockHttpClient: HttpClient;
  let httpClient: HttpClient;
  let productsService: ProductsService;
  let mockResult: SearchResult<Product>;

  beforeEach(() => {
    mockResult = {
      results: [
        {
          description: '',
          name: '',
          price: 123.44,
          productCategoryId: 1,
          productId: 1,
        },
      ],
      pageNumber: 1,
      totalPages: 1,
      totalRecords: 1,
    };
    mockHttpClient = mock(HttpClient);
    when(mockHttpClient.get(anyString())).thenCall(() =>
      Observable.of(mockResult)
    );
    httpClient = instance(mockHttpClient);
    productsService = new ProductsService(httpClient);
  });

  it(
    'should call the api for products',
    async(async done => {
      const result = await productsService
        .getProducts()
        .take(1)
        .toPromise();

      expect(result).toEqual(mockResult);

      verify(
        mockHttpClient.get(
          'http://localhost:3000/api/v1/products?sortColumn=name&pageSize=999&pageNumber=1&categories=1,2,3'
        )
      ).once();
    })
  );
});
