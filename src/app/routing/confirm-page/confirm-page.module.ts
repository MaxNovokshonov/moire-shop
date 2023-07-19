import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPageComponent } from './confirm-page.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ConfirmPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ConfirmPageComponent }]),
  ],
  exports: [ConfirmPageComponent],
})
export class ConfirmPageModule {}
