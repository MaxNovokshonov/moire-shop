import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CounterComponent } from './components/counter/counter.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { OrderInfoComponent } from './components/order-info/order-info.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CounterComponent,
    PageTitleComponent,
    OrderInfoComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, RouterLink],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CounterComponent,
    PageTitleComponent,
    OrderInfoComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}
