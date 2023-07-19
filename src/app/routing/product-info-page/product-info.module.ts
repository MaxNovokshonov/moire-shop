import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoPageComponent } from './product-info-page.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductInfoPageComponent,
    ProductGalleryComponent,
    ProductFormComponent,
    ProductInfoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ProductInfoPageComponent }]),
    ReactiveFormsModule,
  ],
  exports: [ProductInfoPageComponent],
})
export class ProductInfoModule {}
