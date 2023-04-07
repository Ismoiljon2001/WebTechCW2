import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Product.Models';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{


  addProductRequest: Product = {
    productId: 0,
    productName: '',
    productType: '',
    size: 0,
    color: '',
    prize: 0  


  };

  constructor(private productService: ProductsService, private router: Router){

  }

  ngOnInit(): void {
  }

  addProduct(){
    console.log("hello this is submit");
    
    this.productService.addProduct(this.addProductRequest)
    .subscribe({
      next: (product)=>{
        this.router.navigate(['Product'])
      }
    })
  }
}
