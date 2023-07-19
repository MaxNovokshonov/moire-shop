import { Component, Input } from '@angular/core';
import { ProductInfo } from '../../../common/interfaces/productInfo';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  @Input() product: ProductInfo;
  cartForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cartForm = this.fb.group({
      size: [null],
    });
  }

  submit() {
    console.log(this.cartForm.value);
  }
}
