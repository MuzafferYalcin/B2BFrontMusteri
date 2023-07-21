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
    this.getOrders();
  }

  getOrders(){
    this.orderService.getOrder(this.customerId).subscribe((next:any)=>{
      this.orders = next.data;
      console.log(next.data)
    })
  }

  delete(order: any){
    this.orderService.delete(order).subscribe((next:any)=>{
      alert(next.message);
      this.getOrders();
    },err=>{alert(err.error)})
  }
}
