import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page/cart-page.component';
import { SharedModule } from '../shared/shared.module';
import { CartItemComponent } from './cart-page/components/cart-item/cart-item.component';

@NgModule({
  declarations: [CartPageComponent, CartItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [CartPageComponent],
})
export class CartModule {}
