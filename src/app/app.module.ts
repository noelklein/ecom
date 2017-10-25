import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { ProductsService } from './services/products.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Route[] = [{
  path: '',
  component: ProductListComponent
}, {
  path: 'product/:productId',
  component: ProductDetailsComponent
}, {
  path: 'checkout',
  component: CheckoutComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductThumbnailComponent,
    CategoryFilterComponent,
    HeaderComponent,
    ProductDetailsComponent,
    CheckoutComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
