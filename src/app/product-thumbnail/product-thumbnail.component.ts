import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css'],
})
export class ProductThumbnailComponent {
  @Input() product: string;

  public get imageSrc() {
    return `assets/images/${this.product}.jpg`;
  }
}
