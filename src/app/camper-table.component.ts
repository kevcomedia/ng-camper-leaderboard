import { Component, Input } from '@angular/core';
import { Camper } from './camper';

@Component({
  selector: 'camper-table',
  templateUrl: './camper-table.component.html'
})
export class CamperTableComponent {
  @Input() campers: Camper[];
}
