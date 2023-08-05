import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasketService } from '../../../services/basket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartCounter: string | null;

  cartSubscription: Subscription;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.cartSubscription = this.basketService.cartTotalQuantity.subscribe((totalQuantity) => {
      this.cartCounter = totalQuantity.toString();
    });
    this.basketFromLocalStorage;
  }

  get basketFromLocalStorage() {
    if (this.basketService.isBasket()) {
      return (this.cartCounter = this.basketService.basketTotalQuantity!.toString());
    } else {
      return;
    }
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }
}
