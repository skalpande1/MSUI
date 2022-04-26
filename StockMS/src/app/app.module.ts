import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './components/company/company.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    NavbarComponent,
    CustomerComponent,
    CustomerCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
