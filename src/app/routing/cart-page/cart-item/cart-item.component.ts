import { Component, Input, OnChanges } from '@angular/core';
import { BasketItem } from '../../../common/interfaces/basket';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnChanges {
  @Input() product: BasketItem;

  itemQuantity: number;

  constructor() {}

  ngOnChanges(): void {
    this.itemQuantity = this.product.quantity;
  }

  get itemTotalPrice() {
    return this.itemQuantity * this.product.price;
  }

  get BasketTotalPrice() {
    return this.itemTotalPrice;
  }

  changeQuantity(event: number) {
    this.itemQuantity = event;
  }
}
