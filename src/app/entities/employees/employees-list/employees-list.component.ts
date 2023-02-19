import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { EmployeesService } from '../employees.service';
import { catchError, EMPTY, Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent],
  templateUrl: './employees-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListComponent {
  errorTrigger$ = new Subject<HttpErrorResponse>();
  errorAction$ = this.errorTrigger$.asObservable();

  employees$ = this.employeesService.getAllEmployees().pipe(
    catchError((err: HttpErrorResponse) => {
      this.errorTrigger$.next(err);
      return EMPTY;
    })
  );

  constructor(
    private employeesService: EmployeesService,
    private router: Router
  ) {}

  goToDetail(id: string) {
    this.router.navigate([`/employees/${id}`]);
  }
}
