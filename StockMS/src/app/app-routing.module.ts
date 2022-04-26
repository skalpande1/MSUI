import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerComponent } from './components/customer/customer.component';
import { Company } from './models/company';

const routes: Routes = [
  { path: 'company', component: CompanyComponent },
  { path: 'customerAll', component: CustomerComponent },
  { path: 'customerCreate', component: CustomerCreateComponent },
  { path: '', pathMatch: 'full', component: CompanyComponent },
  { path: '', pathMatch: 'full', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
