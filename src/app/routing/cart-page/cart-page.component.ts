import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { BasketResponse } from '../../common/interfaces/basket';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  basket: BasketResponse;
  basketTotalQuantity: number;
  cartTotalPrice: number;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.getBasket();
    this.basketService.basket.subscribe((value) => {
      this.basket = value;
    });
    this.basketService.cartTotalQuantity.subscribe((value) => {
      this.basketTotalQuantity = value;
    });
    this.basketService.cartTotalPrice.subscribe((value) => {
      this.cartTotalPrice = value;
    });
  }

  getBasket() {
    this.basketService.getBasket().subscribe((response) => {
      this.basketService.basket.next(response);
      this.basketService.cartTotalQuantity.next(this.basketService.getTotalQuantity(response));
      this.basketService.cartTotalPrice.next(this.basketService.getTotalPrice(response));
    });
  }

  updateBasket(response: BasketResponse) {
    this.basketService.basket.next(response);
    this.basketService.cartTotalQuantity.next(this.basketService.getTotalQuantity(response));
    this.basketService.cartTotalPrice.next(this.basketService.getTotalPrice(response));
  }
}
