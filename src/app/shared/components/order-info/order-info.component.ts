import { Component, Input } from '@angular/core';
import { BasketItem } from '../../../common/interfaces/basket';
import { BasketService } from '../../../services/basket.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss'],
})
export class OrderInfoComponent {
  @Input() products: BasketItem[];
  @Input() deliveryPrice: string;

  constructor(private basketService: BasketService) {}
}
