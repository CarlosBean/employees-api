import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, Location, NgOptimizedImage } from '@angular/common';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';
import { catchError, EMPTY, Observable, Subject } from 'rxjs';
import { Employee } from '../employee.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './employee-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailComponent {
  employee$!: Observable<Employee>;

  errorTrigger$ = new Subject<HttpErrorResponse>();
  errorAction$ = this.errorTrigger$.asObservable();

  images = {
    young: {
      name: 'photo-1535295972055-1c762f4483e5?w=400&h=400&fit=crop',
      width: 400,
      height: 400,
    },
    old: {
      name: 'photo-1552641156-93ea2a5f78e2?w=400&h=400&fit=crop',
      width: 400,
      height: 400,
    },
  };

  constructor(
    private employeesService: EmployeesService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    const params = this.route.snapshot.params;
    const characterId = params['id'];

    this.employee$ = this.employeesService.getEmployee(characterId).pipe(
      catchError((err: HttpErrorResponse) => {
        this.errorTrigger$.next(err);
        return EMPTY;
      })
    );
  }

  goBack() {
    this.location.back();
  }
}
