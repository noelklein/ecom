import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { cartReducer } from './cart.reducer';
import { CartComponent } from './cart/cart.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailsPresentationComponent } from './product-details-presentation/product-details-presentation.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { CartService } from './services/cart.service';
import { ProductsService } from './services/products.service';

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
  {
    path: 'cart',
    component: CartComponent,
  },
];

export class MyErrorHandler implements ErrorHandler {
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
    CartComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(
      { cart: cartReducer },
      {
        initialState: {
          cart: [],
        },
      }
    ),
  ],
  providers: [
    ProductsService,
    CartService,
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
