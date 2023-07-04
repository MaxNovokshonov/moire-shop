import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoPageComponent } from './product-info-page/product-info-page.component';
import { SharedModule } from '../shared/shared.module';
import { ProductGalleryComponent } from './product-info-page/components/product-gallery/product-gallery.component';
import { ProductFormComponent } from './product-info-page/components/product-form/product-form.component';
import { ProductInfoComponent } from './product-info-page/components/product-info/product-info.component';

@NgModule({
  declarations: [
    ProductInfoPageComponent,
    ProductGalleryComponent,
    ProductFormComponent,
    ProductInfoComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [ProductInfoPageComponent],
})
export class ProductInfoModule {}
