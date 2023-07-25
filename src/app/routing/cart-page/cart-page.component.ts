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

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.getBasket();
  }

  getBasket() {
    this.basketService.getBasket().subscribe((response) => {
      this.basket = response;
      console.log(this.basket)
    });
  }
}
