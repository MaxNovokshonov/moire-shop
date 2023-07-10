import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './routing/products-page/products.module';
import { ProductInfoModule } from './routing/product-info-page/product-info.module';
import { CartModule } from './routing/cart-page/cart.module';
import { OrderPageModule } from './routing/order-page/order-page.module';
import { ConfirmPageModule } from './routing/confirm-page/confirm-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    ProductInfoModule,
    CartModule,
    OrderPageModule,
    ConfirmPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
