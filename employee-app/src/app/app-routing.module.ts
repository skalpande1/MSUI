import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAllComponent } from './employee-all/employee-all.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  {path:'save', component:EmployeeCreateComponent},
  {path:'all', component:EmployeeAllComponent},
  {path:'find/:id', component:EmployeeEditComponent},
  {path:'', redirectTo:'all',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
