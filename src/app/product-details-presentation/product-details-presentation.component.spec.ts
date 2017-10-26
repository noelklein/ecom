import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsPresentationComponent } from './product-details-presentation.component';

describe('ProductDetailsPresentationComponent', () => {
  let component: ProductDetailsPresentationComponent;
  let fixture: ComponentFixture<ProductDetailsPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
