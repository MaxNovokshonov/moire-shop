import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductInfo } from '../../common/interfaces/productInfo';
import { PageType } from '../../common/enums/pageType';

@Component({
  selector: 'app-product-info-page',
  templateUrl: './product-info-page.component.html',
  styleUrls: ['./product-info-page.component.scss'],
})
export class ProductInfoPageComponent implements OnInit {
  product: ProductInfo;
  pageType = PageType.PRODUCT_INFO;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.productsService.getProductById(params['id']);
        }),
      )
      .subscribe((product) => {
        this.product = product;
      });
  }
}
