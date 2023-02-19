import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './employee-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCardComponent {
  @Input() data?: Employee;

  images = {
    young: {
      name: 'photo-1535295972055-1c762f4483e5?w=200&h=200&fit=crop',
      width: 200,
      height: 200,
    },
    old: {
      name: 'photo-1552641156-93ea2a5f78e2?w=200&h=200&fit=crop',
      width: 200,
      height: 200,
    },
  };
}
