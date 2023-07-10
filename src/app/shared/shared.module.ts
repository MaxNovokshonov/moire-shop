import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CounterComponent } from './components/counter/counter.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { OrderInfoComponent } from './components/order-info/order-info.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CounterComponent,
    PageTitleComponent,
    OrderInfoComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CounterComponent,
    PageTitleComponent,
    OrderInfoComponent,
  ],
})
export class SharedModule {}
