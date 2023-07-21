import { Component } from '@angular/core';
import { BasketService } from './Service/basket.service';
import { OrderService } from '../order/Service/order.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  baskets : any = [];
  customerId = parseInt(localStorage.getItem("customerId")!);
  totalprice =0;
  constructor(private basketService : BasketService, private orderService :OrderService){
    this.getBaskets();
  }

  getBaskets(){
    var id = localStorage.getItem("customerId");
    if(id){
        this.basketService.getBaskets(parseInt(id)).subscribe((next:any)=>{
          this.baskets = next.data;
          this.getTotal(this.baskets)
      })
      }
  }


  getTotal(basket :any[]){
    basket.forEach(e=>{
      this.totalprice += e.fiyat * e.quantity
    })
  }


  addOrder(){
    this.orderService.addOrder(this.customerId).subscribe((res:any)=>{
      alert(res.message);
      this.getBaskets();
    })
  }
}
