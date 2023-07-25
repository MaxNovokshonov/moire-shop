import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Product } from '../../../common/interfaces/products';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PictureService } from '../../../services/picture.service';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],
})
export class ProductsItemComponent implements OnChanges, OnDestroy {
  @Input() product: Product;

  imageUrl: string;
  colorForm: FormGroup;
  colorSubscription = new Subscription();


  constructor(private fb: FormBuilder, private pictureService: PictureService) {
    this.colorForm = this.fb.group({
      color: [0],
    });
  }

  ngOnChanges(): void {
    this.setDefaultImage();
    this.colorSubscription = this.color.valueChanges.subscribe((value: number) => {
      this.imageUrl = this.pictureService.setImageByColor(value, this.product);
    });
  }

  get color() {
    return this.colorForm.controls['color'] as FormControl;
  }

  setDefaultImage() {
    this.imageUrl = this.product.colors[0].gallery
      ? this.product.colors[0].gallery[0].file.url
      : '/assets/img/image_not_found.jpg';
  }

  ngOnDestroy(): void {
    this.colorSubscription.unsubscribe();
  }
}
