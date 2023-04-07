import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/Order.Model';
import { OrderService } from 'src/app/Services/order-service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  order: Order[] = [];
  constructor(private orderService: OrderService){}

  ngOnInit(): void {
    this.orderService.GetAllOrders()
    .subscribe({
      next: (order) => {
       this.order = order;
      },
      error: (Response) => {
        console.log(this.order)
      }
    })
  }
}
