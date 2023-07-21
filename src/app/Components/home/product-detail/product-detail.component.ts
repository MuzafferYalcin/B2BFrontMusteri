import { Component ,OnInit } from '@angular/core';
import { BasketService } from '../../basket/Service/basket.service';
import { ProductService } from '../Service/product.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  productImages : any = [];
  quantity : number = 1;
  customerId= 0;
  product : any ={};
  productId : number=0;
  constructor(private basketService : BasketService ,
    private productService : ProductService,
    private activetedRoute : ActivatedRoute

    ){}
  ngOnInit(): void {
    this.activetedRoute.params.subscribe((next:any)=>{
      this.productId= next.id;
      this.customerId = parseInt(localStorage.getItem("customerId")!);
      this.getProduct();
    })
  }

  getProduct(){
    this.productService.getProductforCustomer(this.productId,this.customerId).subscribe((next:any)=>{
      this.product = next.data
    });
  }

  addBasket(){
    var basket : any = {};
    basket.productId = this.product.id;
    var customerid = localStorage.getItem("customerId");
    if(customerid) basket.customerId = parseInt(customerid);
    else return alert("kullanıcı yok");
    basket.quantity = this.quantity;
    basket.fiyat = (this.product.discount > 0 ? (this.product.price * (100-this.product.discount))/100 : this.product.price )

    this.quantity = 1;
    this.basketService.addBasket(basket).subscribe((next:any)=>{
      alert(next.message)
    },err=>{
      alert(err.error)
    })


  }

}
