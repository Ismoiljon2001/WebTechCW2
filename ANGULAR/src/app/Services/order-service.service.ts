import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Order } from '../Models/Order.Model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor( private http: HttpClient ) { }

  GetAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseApiUrl + '/api/Orders')
  }

  addOrder(addOrderRequest: Order): Observable<Order> {
    return this.http.post<Order>(this.baseApiUrl + '/api/Orders', addOrderRequest);
  }


  getOrder(orderId: number): Observable<Order> {
    return this.http.get<Order>(this.baseApiUrl + '/api/Orders/' + orderId);
  }

  updateOrder(orderId: number, updateOrderRequest: Order): Observable<Order>{
    return this.http.put<Order>(this.baseApiUrl + '/api/Orders/' + orderId, updateOrderRequest);
  }

  deleteOrder(orderId: number): Observable<Order>{
    return this.http.delete<Order>(this.baseApiUrl + '/api/Orders/' + orderId); 
  }
}
 