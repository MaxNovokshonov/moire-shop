import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './routing/products-page/products.module';
import { ProductInfoModule } from './routing/product-info-page/product-info.module';
import { CartModule } from './routing/cart-page/cart.module';
import { OrderPageModule } from './routing/order-page/order-page.module';
import { ConfirmPageModule } from './routing/confirm-page/confirm-page.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AccessKeyInterceptor } from './services/accesskey.interceptor';

// const INTERCEPTOR_PROVIDER: Provider = {
//   provide: HTTP_INTERCEPTORS,
//   multi: true,
//   useClass: AccessKeyInterceptor,
// };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
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
