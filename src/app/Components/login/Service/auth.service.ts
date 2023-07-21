import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  login(login :any){
    return this.http.post("https://localhost:7220/api/Auth/loginCustomer",login);
  }

  isAuth(){
    var customerId = localStorage.getItem("customerId")
    return customerId ? true : false
  }
}
