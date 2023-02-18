import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent],
  templateUrl: './employees-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListComponent {
  employees$ = this.employeesService.getAllEmployees();

  constructor(private employeesService: EmployeesService) {}
}
