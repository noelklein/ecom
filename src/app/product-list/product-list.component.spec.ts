import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { instance, mock, when } from 'ts-mockito';

import { ProductThumbnailComponent } from '../product-thumbnail/product-thumbnail.component';
import { Product } from '../services/product';
import { ProductsService } from '../services/products.service';
import { SearchResult } from '../services/result';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let fixture: ComponentFixture<ProductListComponent>;
  let mockSearchResult: SearchResult<Product>;
  let productList: DebugElement[];

  beforeEach(
    async(() => {
      mockSearchResult = {
        pageNumber: 1,
        totalPages: 1,
        totalRecords: 1,
        results: [
          {
            description: 'test1',
            name: 'test1',
            price: 12.44,
            productCategoryId: 1,
            productId: 1,
          },
        ],
      };
      const mockProductsService = mock(ProductsService);
      when(mockProductsService.getProducts()).thenReturn(
        Observable.of(mockSearchResult)
      );

      TestBed.configureTestingModule({
        declarations: [ProductListComponent, ProductThumbnailComponent],
        providers: [
          {
            provide: ProductsService,
            useValue: instance(mockProductsService),
          },
        ],
      });
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    fixture.detectChanges();
    productList = fixture.debugElement.queryAll(
      By.directive(ProductThumbnailComponent)
    );
  });

  it('should have one item', () => {
    expect(productList.length).toBe(1);
  });

  it('should have correct text on first product in list', () => {
    const firstProductInList = productList[0].nativeElement as HTMLElement;
    expect(firstProductInList.textContent).toEqual('test');
  });
});
