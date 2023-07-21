import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  addOrder(customerId : number){
    return this.http.post("https://localhost:7220/api/Order/add/"+customerId,customerId)
  }

  getOrder(customerId : number){
    return this.http.get("https://localhost:7220/api/Order/getListByCustomerId/"+customerId);
  }

  getOrderItems(id : number ){
    return this.http.get("https://localhost:7220/api/OrderItem/getListDto?orderid="+id);
  }

  getOrderById(id: number){
    return this.http.get("https://localhost:7220/api/Order/getById/"+id);
  }

  delete(order :any){
   return  this.http.post("https://localhost:7220/api/Order/delete",order);
  }
}
