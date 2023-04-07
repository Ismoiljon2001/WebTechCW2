import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product.Models';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  constructor(private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.GetAllProducts()
    .subscribe({
      next: (products) => {
       this.products = products;
      },
      error: (Response) => {
        console.log(this.products)
      }
    })
  }
}
