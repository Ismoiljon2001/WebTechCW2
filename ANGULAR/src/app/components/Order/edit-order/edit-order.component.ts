import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/Models/Order.Model';
import { OrderService } from 'src/app/Services/order-service.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {


  orderDetails: Order = {
    orderId: 0,
   productId: 0,
    clientId: 0,
    quantity: 0,
   

  }
  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router){ }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe({
      next: (params)=>{
        const orderId = params.get('id');
        console.log(orderId);
        
        if(orderId){
          this.orderService.getOrder(+orderId)
          .subscribe({
            next: (response)=>{
              this.orderDetails = response;
            }
          })
        }
      }
    })
  }

  updateOrder(){
      this.orderService.updateOrder(this.orderDetails.orderId, this.orderDetails)
      .subscribe({
        next: (response)=>{
          this.router.navigate(['Order'])
        }
      });
  }

  deleteOrder(){
    this.orderService.deleteOrder(this.orderDetails.orderId)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['Order']);
      }
    })
  }
}
  