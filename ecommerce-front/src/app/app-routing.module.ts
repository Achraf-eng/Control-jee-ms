import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./pages/products/products.component";
import {CustomersComponent} from "./pages/customers/customers.component";
import {BillsComponent} from "./pages/bills/bills.component";
import {BillsDetailsComponent} from "./pages/bills-details/bills-details.component";
import {AuthGuard} from "./guards/security.guard";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path : "products", component : ProductsComponent
  },
  {
    path : "home", component : HomeComponent
  },
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },
  {
    path : "customers", component : CustomersComponent, //canActivate, data
  },
  {
    path : "bills/:customerID", component : BillsComponent
  },
  {
    path : "bill-details/:billID", component : BillsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
