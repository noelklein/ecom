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
  @Output() categoriesChanged: EventEmitter<number[]>;

  public categories: Observable<Category[]>;
  private selectedCategories: Set<number>;

  constructor(productsService: ProductsService) {
    this.categoriesChanged = new EventEmitter();
    this.selectedCategories = new Set();
    this.categories = productsService.getCategories();
  }

  public filterChanged(categoryId) {
    if (this.selectedCategories.has(categoryId)) {
      this.selectedCategories.delete(categoryId);
    } else {
      this.selectedCategories.add(categoryId);
    }
    this.categoriesChanged.emit(Array.from(this.selectedCategories));
  }
}
