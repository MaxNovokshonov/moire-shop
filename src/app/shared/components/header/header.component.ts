import {Component, OnInit} from '@angular/core';
import { BasketService } from '../../../services/basket.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  cartCounter = 0;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.getTotalQuantity()
  }

  getTotalQuantity() {
    this.basketService
      .getBasket()
      .pipe(
        map((response) =>
          response.items.map((item) => item.quantity).reduce((sum, current) => sum + current, 0),
        ),
      )
      .subscribe((response) => {
        this.cartCounter = response
      });
  }


}
