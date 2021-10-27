import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cartCheckout } from './components/cart-checkout/cart-checkout.component';
import { HomeComponent } from './components/shared/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cart-checkout', component: cartCheckout},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
