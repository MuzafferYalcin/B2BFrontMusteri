import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  api : string ="https://localhost:7220/api/Basket/"
  constructor(private http : HttpClient) { }


  getBaskets(customerid : number){
    return this.http.get(this.api+"getListByCustomerId/"+customerid);
  }

  addBasket(basket : any){
    return this.http.post(this.api+"add",basket);
  }
}
