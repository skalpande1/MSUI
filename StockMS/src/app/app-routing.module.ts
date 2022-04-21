import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { Company } from './models/company';

const routes: Routes = [
  { path: 'company', component: CompanyComponent },
  { path: 'customer', component: CustomerComponent },
  { path: '', pathMatch: 'full', component: CompanyComponent },
  { path: '', pathMatch: 'full', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
