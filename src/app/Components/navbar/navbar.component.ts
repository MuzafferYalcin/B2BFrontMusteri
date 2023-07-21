import { Component } from '@angular/core';
import { AuthService } from '../login/Service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public authService :AuthService){}

  logout(){
    localStorage.removeItem("customerId")
    localStorage.removeItem("customerName")
  }
}
