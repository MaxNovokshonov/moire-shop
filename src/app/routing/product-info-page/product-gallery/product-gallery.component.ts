import { Component, Input, OnChanges } from '@angular/core';
import { ProductInfo } from '../../../common/interfaces/productInfo';
import { PictureService } from '../../../services/picture.service';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss'],
})
export class ProductGalleryComponent implements OnChanges {
  @Input() product: ProductInfo;
  imageUrl: string;

  constructor(private pictureService: PictureService) {}

  ngOnChanges(): void {
    this.setDefaultImage();
    this.pictureService.selectedColor.subscribe((value) => {
      this.imageUrl = this.pictureService.setImageByColor(value, this.product);
    });
  }

  setDefaultImage() {
    this.imageUrl = this.product.colors[0].gallery
      ? this.product.colors[0].gallery[0].file.url
      : '/assets/img/image_not_found.jpg';
  }

  setImageByColor(id: number) {
    this.pictureService.setSelectedColor(id);
  }
}
