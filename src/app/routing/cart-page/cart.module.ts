import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import { SharedModule } from '../../shared/shared.module';
import { CartItemComponent } from './cart-item/cart-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartPageComponent, CartItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: CartPageComponent }]),
  ],
  exports: [CartPageComponent],
})
export class CartModule {}
