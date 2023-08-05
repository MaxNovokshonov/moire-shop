import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { OrderResponse } from '../../common/interfaces/order';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.scss'],
})
export class ConfirmPageComponent implements OnInit {
  order: OrderResponse;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private basketService: BasketService,
  ) {}

  ngOnInit(): void {
    this.getOrder();
  }

  get orderTotalQuantity() {
    return this.basketService.getTotalQuantity(this.order.basket);
  }

  getOrder() {
    this.route.params
      .pipe(
        switchMap((params) => {
          return this.orderService.getOrder(params['id']);
        }),
      )
      .subscribe((order) => {
        this.order = order;
        console.log(this.order);
      });
  }
}
