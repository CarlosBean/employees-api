import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employees' },
  {
    path: 'employees',
    loadComponent: () =>
      import(
        './entities/employees/employees-list/employees-list.component'
      ).then(mod => mod.EmployeesListComponent),
  },
  {
    path: 'employees/:id',
    loadComponent: () =>
      import(
        './entities/employees/employee-detail/employee-detail.component'
      ).then(mod => mod.EmployeeDetailComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
