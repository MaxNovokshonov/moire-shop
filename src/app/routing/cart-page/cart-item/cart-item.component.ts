import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { BasketItem } from '../../../common/interfaces/basket';
import { BasketService } from '../../../services/basket.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnChanges {
  @Input() product: BasketItem;
  @Output() deleteProductEmit = new EventEmitter();
  @Output() updateProductEmit = new EventEmitter();
  itemQuantity: number;

  constructor(private basketService: BasketService) {}

  ngOnChanges(): void {
    this.itemQuantity = this.product.quantity;
  }

  get itemTotalPrice() {
    return this.itemQuantity * this.product.price;
  }

  changeQuantity(event: number) {
    this.itemQuantity = event;
    this.updateProduct(this.product.id, this.itemQuantity);
  }

  deleteProduct(id: number) {
    this.basketService.deleteProductByID(id).subscribe((response) => {
      this.deleteProductEmit.emit(response);
    });
  }

  updateProduct(id: number, quantity: number) {
    this.basketService.updateBasket(id, quantity).subscribe((response) => {
      this.basketService.cartTotalQuantity.next(this.basketService.getTotalQuantity(response));
      this.basketService.setBasketQuantity(this.basketService.cartTotalQuantity.value.toString());
      const getQuantity = response.items.find((i) => i.quantity === quantity);
      if (getQuantity) {
        this.itemQuantity = getQuantity.quantity;
      }
      this.basketService.cartTotalPrice.next(this.basketService.getTotalPrice(response));
    });
  }
}
