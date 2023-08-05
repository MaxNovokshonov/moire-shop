import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  {
    path: 'catalog',
    loadChildren: () =>
      import('./routing/products-page/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./routing/product-info-page/product-info.module').then((m) => m.ProductInfoModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./routing/cart-page/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./routing/order-page/order-page.module').then((m) => m.OrderPageModule),
  },
  {
    path: 'order/:id',
    loadChildren: () =>
      import('./routing/confirm-page/confirm-page.module').then((m) => m.ConfirmPageModule),
  },
  {
    path: 'catalog/:id',
    loadChildren: () =>
      import('./routing/products-page/products.module').then((m) => m.ProductsModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./routing/not-found-page/not-found-page.module').then((m) => m.NotFoundPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
