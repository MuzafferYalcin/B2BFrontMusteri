import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor (private authService : AuthService,
                private router : Router

      ){}

login(form : NgForm){
  let login : any={};
  login.email = form.value.email;
  login.password = form.value.password;

  this.authService.login(login).subscribe((next:any)=>{
    localStorage.setItem("customerId",next.data.id);
    localStorage.setItem("customerName",next.data.name);
    this.router.navigate(["/home"])
  },err=>{
    alert(err.error);
  });
}
}
