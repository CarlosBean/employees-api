import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ResponseApi } from 'src/app/core/model/response-api.model';
import { environment } from 'src/environments/environment';
import { Employee } from './employee.model';

const BASE_URL = environment.API_URL;
const URI = BASE_URL + '/employees';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<ResponseApi<Employee[]>>(URI).pipe(
      map(result => {
        return result.data.map(x => {
          x.employee_age = Number(x.employee_age);
          x.employee_salary = Number(x.employee_salary);
          return x;
        });
      })
    );
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http
      .get<ResponseApi<Employee>>(`${URI}/${id}`)
      .pipe(map(result => result.data));
  }
}
