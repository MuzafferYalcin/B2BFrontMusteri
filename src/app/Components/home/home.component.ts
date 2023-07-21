import { Component } from '@angular/core';
import { ProductService } from './Service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products :any = [];
  customerId = 0;
  constructor(private productService : ProductService,private avtivetedRoute : ActivatedRoute) {
    this.customerId = parseInt(localStorage.getItem("customerId")!);
    this.getProducts()
  }

  getProducts(){
    this.productService.getList(this.customerId).subscribe((next:any)=> {
      this.products = next.data
    });
  }
}
