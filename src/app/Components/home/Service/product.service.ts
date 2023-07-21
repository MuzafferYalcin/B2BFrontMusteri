import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getList(customerid :number){
    return this.http.get("https://localhost:7220/api/Product/getListforCustomer/"+customerid);
  }
  getProduct(id : number){
    return this.http.get("https://localhost:7220/api/Product/get/"+id);
  }

  getProductforCustomer(id: number,customerid :number){
    return this.http.get("https://localhost:7220/api/Product/getforCustomer/"+customerid+"/product/"+id);
  }
}
