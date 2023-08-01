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

  ngOnDestroy(): void {
    this.filterService.resetParams();
  }
}
