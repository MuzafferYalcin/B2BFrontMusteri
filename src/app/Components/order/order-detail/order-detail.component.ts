import { Component } from '@angular/core';
import { OrderService } from '../Service/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent {
  order : any={};
  orderItems :any = [];
  orderId=0;
  constructor (private orderService: OrderService,private activetedRoute : ActivatedRoute){
    this.activetedRoute.params.subscribe((res:any)=>{
      this.orderId= res.id;
      this.getOrder();
      this.getOrderItems();
    })

  }

  getOrder(){
    this.orderService.getOrderById(this.orderId).subscribe((next:any)=>{
      this.order= next.data;
    })
  }

  getOrderItems(){
    this.orderService.getOrderItems(this.orderId).subscribe((next:any)=>{
      this.orderItems= next.data;
    })
  }
}
