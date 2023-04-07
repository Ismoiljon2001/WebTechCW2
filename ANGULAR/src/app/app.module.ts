import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/Product/product-list/product-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/Product/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './components/Product/edit-product/edit-product.component';
import { ClientListComponent } from './components/Client/client-list/client-list.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/Client/edit-client/edit-client.component';
import { OrderListComponent } from './components/Order/order-list/order-list.component';
import { AddOrderComponent } from './components/Order/add-order/add-order.component';
import { EditOrderComponent } from './components/Order/edit-order/edit-order.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent,
    ClientListComponent,
    AddClientComponent,
    EditClientComponent,
    OrderListComponent,
    AddOrderComponent,
    EditOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
