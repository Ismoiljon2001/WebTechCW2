import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/Product/product-list/product-list.component';
import { AddProductComponent } from './components/Product/add-product/add-product.component';
import { EditProductComponent } from './components/Product/edit-product/edit-product.component';
import { ClientListComponent } from './components/Client/client-list/client-list.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/Client/edit-client/edit-client.component';
import { OrderListComponent } from './components/Order/order-list/order-list.component';
import { AddOrderComponent } from './components/Order/add-order/add-order.component';
import { EditOrderComponent } from './components/Order/edit-order/edit-order.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'Product',
    component: ProductListComponent
  },
  {
    path: 'Product/add',
    component: AddProductComponent
  },

  {
    path: 'Product/edit/:id',
    component: EditProductComponent
  },

  {
    path: 'Client',
    component: ClientListComponent
  },

  {
    path: 'Client/add',
    component: AddClientComponent
  },

  {
    path: 'Client/edit/:id',
    component: EditClientComponent
  },

  {
    path: 'Order',
    component: OrderListComponent
  },

  {
    path: 'Order/add',
    component: AddOrderComponent
  },
  {
    path: 'Order/edit/:id',
    component: EditOrderComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
