import { Component, OnInit } from '@angular/core';
import { ProductsResponse } from '../../../common/interfaces/products';
import { ProductsService } from '../../../services/products.service';
import { FilterService } from '../../../services/filter.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: ProductsResponse;

  constructor(private productsService: ProductsService, private filterService: FilterService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts1() {
    this.filterService.params$.subscribe((params) => {
      this.productsService.getAllProducts(params).subscribe((response) => {
        this.products = response;
        this.filterService.productsCount = response.pagination.total;
      });
    });
  }

  getProducts() {
    this.filterService.params$
      .pipe(
        switchMap((params) => {
          return this.productsService.getAllProducts(params);
        }),
      )
      .subscribe((products) => {
        this.products = products;
        this.filterService.productsCount = products.pagination.total;
      });
  }
}
