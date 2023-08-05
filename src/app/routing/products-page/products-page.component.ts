import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  constructor(private filterService: FilterService, private basketService: BasketService) {}

  ngOnInit(): void {
    this.getAccessKey();
    this.getBasketQuantity();
  }

  get productsAmount() {
    return this.filterService.productsCount;
  }

  getAccessKey() {
    if (!this.basketService.isAuthenticated()) {
      this.basketService.getUserAccessKey().subscribe((response) => {
        this.basketService.setAccessKey(response.accessKey);
        console.log(response);
      });
    }
  }

  getBasketQuantity() {
    if (!this.basketService.isBasket()) {
      this.basketService.cartTotalQuantity.next(Number(this.basketService.basketTotalQuantity));
    }
  }

  ngOnDestroy(): void {
    this.filterService.resetParams();
  }
}
