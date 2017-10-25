import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Product } from '../services/product';
import { ProductThumbnailComponent } from './product-thumbnail.component';

describe('ProductThumbnailComponent', () => {
  let fixture: ComponentFixture<ProductThumbnailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, ProductThumbnailComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should be created', () => {
    const element = fixture.debugElement.query(By.css('span'))
      .nativeElement as HTMLElement;
    expect(element.textContent).toEqual('test');
  });
});

@Component({
  template: `<app-product-thumbnail [product]="product"></app-product-thumbnail>`,
})
class TestHostComponent {
  public product: Product = {
    description: 'test',
    name: 'test',
    price: 1.22,
    productCategoryId: 1,
    productId: 1,
  };
}
