import { Component, Input } from '@angular/core';

import { Product } from '../services/product';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css'],
})
export class ProductThumbnailComponent {
  @Input() product: Product;
}
