import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page.component';
import { ProductsFilterComponent } from './products-filter/products-filter.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsItemComponent } from './products-item/products-item.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductsFilterComponent,
    ProductsListComponent,
    ProductsItemComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [ProductsPageComponent],
})
export class ProductsModule {}
