import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderComponent } from './Components/order/order.component';
import { BasketComponent } from './Components/basket/basket.component';
import { OrderDetailComponent } from './Components/order/order-detail/order-detail.component';
import { ProductDetailComponent } from './Components/home/product-detail/product-detail.component';

const routes: Routes = [

  {
    path:"login",
    component : LoginComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "order",
    component : OrderComponent
  },
  {
    path: "basket",
    component : BasketComponent
  },
  {
    path : "order-detail/:id",
    component : OrderDetailComponent
  },

  {
    path: "product-detail/:id",
    component : ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
