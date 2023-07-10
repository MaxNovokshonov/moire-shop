import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './order-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [OrderPageComponent],
  exports: [OrderPageComponent],
  imports: [CommonModule, SharedModule],
})
export class OrderPageModule {}
