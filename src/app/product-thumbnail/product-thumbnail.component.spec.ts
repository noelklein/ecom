import { By } from '@angular/platform-browser';
import { Product } from '../services/product';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductThumbnailComponent } from './product-thumbnail.component';

fdescribe('ProductThumbnailComponent', () => {
  let fixture: ComponentFixture<ProductThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductThumbnailComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should output "test" in a span', () => {
    const span = fixture.debugElement.query(By.css('span')).nativeElement as HTMLElement;

    expect(span.textContent).toEqual('test');
  });
});

@Component({
  template: '<app-product-thumbnail [product]="product"></app-product-thumbnail>'
})
class TestHostComponent {
  public product: Product = {
    description: 'test',
    name: 'asdf',
    price: 12.33,
    productCategoryId: 1,
    productId: 2
  }
}
