import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Product } from '../Models/Product.Models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor( private http: HttpClient ) { }

  GetAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl + '/api/Products')
  }

  addProduct(addProductRequest: Product): Observable<Product> {
    return this.http.post<Product>(this.baseApiUrl + '/api/Products', addProductRequest);
  }


  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(this.baseApiUrl + '/api/products/' + productId);
  }

  updateProduct(productId: number, updateProductRequest: Product): Observable<Product>{
    return this.http.put<Product>(this.baseApiUrl + '/api/Products/' + productId, updateProductRequest);
  }

  deleteProduct(productId: number): Observable<Product>{
    return this.http.delete<Product>(this.baseApiUrl + '/api/Products/' + productId); 
  }
}
 