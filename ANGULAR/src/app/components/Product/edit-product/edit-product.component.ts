import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/Product.Models';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {


  productDetails: Product = {
    productId: 0,
   productName: '',
    productType: '',
    size: 0,
    color: '',
    prize: 0  

  }
  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router){ }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe({
      next: (params)=>{
        const productId = params.get('id');
        console.log(productId);
        
        if(productId){
          this.productService.getProduct(+productId)
          .subscribe({
            next: (response)=>{
              this.productDetails = response;
            }
          })
        }
      }
    })
  }

  updateProduct(){
      this.productService.updateProduct(this.productDetails.productId, this.productDetails)
      .subscribe({
        next: (response)=>{
          this.router.navigate(['Product'])
        }
      });
  }

  deleteProduct(){
    this.productService.deleteProduct(this.productDetails.productId)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['Product']);
      }
    })
  }
}
  