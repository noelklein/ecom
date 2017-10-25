import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Category } from '../services/category';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css'],
})
export class CategoryFilterComponent {
  @Output() filterChanged: EventEmitter<number>;
  public categories: Observable<Category[]>;

  constructor(productsService: ProductsService) {
    this.categories = productsService.getCategories();
  }

  public filterBy(categoryId) {
    this.filterChanged.emit(categoryId);
  }
}
