import { Component, Input, OnChanges } from '@angular/core';

import { Product } from '../services/product';

@Component({
  selector: 'app-product-details-presentation',
  templateUrl: './product-details-presentation.component.html',
  styleUrls: ['./product-details-presentation.component.css'],
})
export class ProductDetailsPresentationComponent implements OnChanges {
  @Input() product: Product;

  public ngOnChanges(): void {
    console.log(this.product);
  }
}
