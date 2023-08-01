import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasketResponse } from '../../common/interfaces/basket';
import { BasketService } from '../../services/basket.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { DeliveryType, PaymentType } from '../../common/interfaces/order';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent implements OnInit, OnDestroy {
  basket: BasketResponse;
  orderForm: FormGroup;
  deliveryTypes: DeliveryType[];
  paymentTypes: PaymentType[];
  isDeliveryTypeSelect = false;
  deliveryPrice: string;
  deliveryTypeSubscription = new Subscription();
  errorMessage = false;

  constructor(
    private basketService: BasketService,
    private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router,
  ) {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^((\\+7)+([0-9]){10})$')]],
      email: [
        '',
        [Validators.required, Validators.pattern('^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{1,10}$')],
      ],
      deliveryTypeId: [null, Validators.required],
      paymentTypeId: [null, Validators.required],
      comment: [''],
    });
  }

  get name(): FormControl {
    return this.orderForm.get('name') as FormControl;
  }

  get address(): FormControl {
    return this.orderForm.get('address') as FormControl;
  }

  get phone(): FormControl {
    return this.orderForm.get('phone') as FormControl;
  }

  get email(): FormControl {
    return this.orderForm.get('email') as FormControl;
  }

  get deliveryTypeId(): FormControl {
    return this.orderForm.get('deliveryTypeId') as FormControl;
  }

  get paymentTypeId(): FormControl {
    return this.orderForm.get('paymentTypeId') as FormControl;
  }

  get basketTotalQuantity() {
    return this.basketService.getTotalQuantity(this.basket);
  }

  get basketTotalPrice() {
    return this.basketService.getTotalPrice(this.basket);
  }

  ngOnInit(): void {
    this.getBasket();
    this.getDeliveryTypes();
    this.deliveryTypeSubscription = this.deliveryTypeId.valueChanges.subscribe((value) => {
      this.getDeliveryPriceById(value);
      this.orderService.getPaymentsType(value).subscribe((response) => {
        this.paymentTypes = response;
        this.isDeliveryTypeSelect = true;
      });
    });
  }

  getBasket() {
    this.basketService.getBasket().subscribe((response) => {
      this.basket = response;
    });
  }

  getDeliveryTypes() {
    this.orderService.getDeliveriesTypes().subscribe((deliveryTypes) => {
      this.deliveryTypes = deliveryTypes;
    });
  }

  getDeliveryPriceById(id: number) {
    const selectDelivery = this.deliveryTypes.find((i) => i.id === id);
    selectDelivery ? (this.deliveryPrice = selectDelivery.price) : '';
  }

  submit() {
    if (this.orderForm.invalid) {
      return;
    }
    this.orderService.createOrder(this.orderForm.value).subscribe(
      (response) => {
        console.log(response);
        this.orderService.order.next(response);
        this.router.navigate(['order', response.id]);
      },
      (error) => (this.errorMessage = true),
    );
  }

  ngOnDestroy(): void {
    this.deliveryTypeSubscription.unsubscribe();
  }
}
