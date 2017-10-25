import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { instance, mock, when } from 'ts-mockito';

import { ProductThumbnailComponent } from '../product-thumbnail/product-thumbnail.component';
import { Product } from '../services/product';
import { ProductsService } from '../services/products.service';
import { SearchResult } from '../services/result';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let fixture: ComponentFixture<ProductListComponent>;
  let mockProductsService: ProductsService;
  let productList: DebugElement[];

  beforeEach(() => {
    mockProductsService = mock(ProductsService);
    const result: SearchResult<Product> = {
      pageNumber: 1,
      totalPages: 1,
      totalRecords: 1,
      results: [
        {
          description: 'test',
          name: 'test',
          price: 1.22,
          productCategoryId: 1,
          productId: 1,
        },
      ],
    };
    when(mockProductsService.getProducts()).thenCall(() =>
      Observable.of(result)
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
  });

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
