import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillsComponent } from './pages/bills/bills.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ProductsComponent } from './pages/products/products.component';
import { BillsDetailsComponent } from './pages/bills-details/bills-details.component';
import {HttpClientModule} from "@angular/common/http";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

export function kcFactory(kcSecService : KeycloakService){
  return ()=>{
    console.log("Keycloak Initialization ...")

    kcSecService.init({
      config : {
        url : "http://localhost:8080",
        realm : "ecom-realm",
        clientId : "ecommerce-app",
        // @ts-ignore
        'enable-cors': true,
      },
      //loadUserProfileAtStartUp : true,
      initOptions : {
        onLoad : 'check-sso',

//silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
//enableLogging:true,
        checkLoginIframe : true
      }
    });
  }
}


@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    CustomersComponent,
    ProductsComponent,
    BillsDetailsComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    KeycloakAngularModule,
  ],
  providers: [
    {provide : APP_INITIALIZER, deps : [KeycloakService], useFactory : kcFactory, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
