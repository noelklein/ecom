import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { anyString, instance, mock, when } from 'ts-mockito';

import 'rxjs/add/observable/of';

import { Product } from './product';
import { ProductsService } from './products.service';
import { SearchResult } from './result';

describe('ProductsService', () => {
  it(
    'should return list of products',
    async(async () => {
      const mockResult: SearchResult<Product> = {
        pageNumber: 1,
        totalPages: 1,
        totalRecords: 1,
        results: [
          {
            name: 'test',
            description: 'test',
            price: 12.44,
            productCategoryId: 1,
            productId: 1,
          },
        ],
      };

      const mockHttpClient = mock(HttpClient);
      when(mockHttpClient.get(anyString())).thenCall(() =>
        Observable.of(mockResult)
      );

      const productsService = new ProductsService(instance(mockHttpClient));

      const result = await productsService.getProducts().toPromise();

      expect(result).toEqual(mockResult);
    })
  );
});
