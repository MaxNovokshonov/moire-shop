import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent {
  constructor(private filterService: FilterService) {}

  get productsAmount() {
    return this.filterService.productsCount;
  }
}
