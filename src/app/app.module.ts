import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { ProductsService } from './services/products.service';
import { ProductDetailsPresentationComponent } from './product-details-presentation/product-details-presentation.component';

const routes: Route[] = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'product/:productId',
    component: ProductDetailsComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];

class MyErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error(error);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductThumbnailComponent,
    CategoryFilterComponent,
    HeaderComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    ProductDetailsPresentationComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ProductsService,
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
