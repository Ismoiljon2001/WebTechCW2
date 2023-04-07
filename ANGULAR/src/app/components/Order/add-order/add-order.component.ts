import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/Models/Order.Model';
import { OrderService } from 'src/app/Services/order-service.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit{


  addOrderRequest: Order = {
    orderId: 0,
    productId: 0,
    clientId: 0,
    quantity: 0,
   


  };

  constructor(private orderService: OrderService, private router: Router){

  }

  ngOnInit(): void {
  }

  addOrder(){
    console.log("hello this is submit");
    
    this.orderService.addOrder(this.addOrderRequest)
    .subscribe({
      next: (order)=>{
        this.router.navigate(['Order'])
      }
    })
  }
}
