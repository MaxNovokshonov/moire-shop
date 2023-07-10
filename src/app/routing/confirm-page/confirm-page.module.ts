import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPageComponent } from './confirm-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ConfirmPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [ConfirmPageComponent],
})
export class ConfirmPageModule {}
