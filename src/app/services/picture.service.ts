import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductInfo } from '../common/interfaces/productInfo';
import { Product } from '../common/interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  selectedColor$ = new Subject<number>();

  constructor() {}

  setSelectedColor(colorId: number) {
    this.selectedColor$.next(colorId);
  }

  setImageByColor(value: number, product: ProductInfo | Product): string {
    const selectedColor = product.colors.find((i) => i.color.id === value);
    if (!selectedColor) {
      return '/assets/img/image_not_found.jpg';
    }
    if (selectedColor.gallery) {
      return selectedColor.gallery[0].file.url;
    } else {
      return '/assets/img/image_not_found.jpg';
    }
  }
}
