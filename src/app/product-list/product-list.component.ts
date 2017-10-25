import { Component, Input } from '@angular/core';

import 'rxjs/add/operator/map';

import { Product } from '../services/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products: Product[];
}
