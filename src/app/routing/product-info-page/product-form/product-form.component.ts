import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { ProductInfo } from '../../../common/interfaces/productInfo';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BasketParams } from '../../../common/interfaces/basket';
import { BasketService } from '../../../services/basket.service';
import { Subscription } from 'rxjs';
import { PictureService } from '../../../services/picture.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnChanges, OnDestroy {
  @Input() product: ProductInfo;
  cartForm: FormGroup;
  quantity = 1;
  basket: BasketParams;
  colorSubscription = new Subscription();
  successMessage = false;

  constructor(
    private fb: FormBuilder,
    private basketService: BasketService,
    private pictureService: PictureService,
  ) {
    this.cartForm = this.fb.group({
      size: [null, Validators.required],
      color: [null, Validators.required],
    });
  }

  ngOnChanges(): void {
    this.colorSubscription = this.color.valueChanges.subscribe((value: number) => {
      this.pictureService.setSelectedColor(value);
    });
  }

  get size(): FormControl {
    return this.cartForm.get('size') as FormControl;
  }

  get color(): FormControl {
    return this.cartForm.get('color') as FormControl;
  }

  submit() {
    if (this.cartForm.invalid) {
      return;
    }

    this.basket = {
      productId: this.product.id,
      colorId: this.color.value,
      sizeId: this.size.value,
      quantity: this.quantity,
    };

    this.basketService.addProductToBasket(this.basket).subscribe((response) => {
      this.successMessage = true;

      this.basketService.cartTotalQuantity.next(this.basketService.getTotalQuantity(response));
      this.basketService.setBasketQuantity(this.basketService.cartTotalQuantity.value.toString());
      setTimeout(() => {
        this.successMessage = false;
      }, 1500);
    });
  }

  setQuantity(amount: number) {
    this.quantity = amount;
  }

  ngOnDestroy(): void {
    this.colorSubscription.unsubscribe();
  }
}
