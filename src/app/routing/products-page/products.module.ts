import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page.component';
import { ProductsFilterComponent } from './products-filter/products-filter.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsItemComponent } from './products-item/products-item.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductsPaginationComponent } from './products-pagination/products-pagination.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductsFilterComponent,
    ProductsListComponent,
    ProductsItemComponent,
    ProductsPaginationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ProductsPageComponent }]),
    ReactiveFormsModule,
  ],
  exports: [ProductsPageComponent],
})
export class ProductsModule {}
