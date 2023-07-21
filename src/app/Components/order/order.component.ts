import { Component } from '@angular/core';
import { OrderService } from './Service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  orders : any=[]
  customerId =parseInt(localStorage.getItem("customerId")!)
  constructor(private orderService : OrderService){
    this.getOrder();
  }

  getOrder(){
    this.orderService.getOrder(this.customerId).subscribe((next:any)=>{
      this.orders = next.data;
      
    })
  }
}
