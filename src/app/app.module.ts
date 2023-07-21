import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { OrderComponent } from './Components/order/order.component';
import { BasketComponent } from './Components/basket/basket.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { OrderDetailComponent } from './Components/order/order-detail/order-detail.component';
import { BasketDetailComponent } from './Components/basket/basket-detail/basket-detail.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './Components/home/product-detail/product-detail.component';
import { ProductPipe } from './Components/home/product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderComponent,
    BasketComponent,
    HomeComponent,
    NavbarComponent,
    ProductPipe,
    OrderDetailComponent,
    BasketDetailComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
