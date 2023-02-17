import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from 'src/app/core/model/response-api.model';
import { environment } from 'src/environments/environment';
import { Employee } from './employee.model';

const BASE_URL = environment.API_URL;
const URI = BASE_URL + '/employees';

type EntityArrayResponse = HttpResponse<ResponseApi<Employee[]>>;
type EntityResponse = HttpResponse<ResponseApi<Employee>>;

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<EntityArrayResponse> {
    return this.http.get<EntityArrayResponse>(URI);
  }

  getEmployee(id: string): Observable<EntityResponse> {
    return this.http.get<EntityResponse>(`${URI}/${id}`);
  }
}
