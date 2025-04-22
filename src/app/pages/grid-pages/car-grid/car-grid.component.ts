import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { GridBaseClass } from '@shared/base-classes/grid-base.class';

@Component({
  selector: 'app-car-grid',
  imports: [AgGridAngular],
  templateUrl: './car-grid.component.html',
  styleUrl: './car-grid.component.scss'
})
export class CarGridComponent extends GridBaseClass implements OnInit {
  constructor() {
    super();

    this.populateGrid();
  }

  ngOnInit(): void {
    this.updateGridName('Cars');
  }

  protected getColumnDefs(): ColDef[] {
    return [
      { field: 'make' },
      { field: 'model' },
      { field: 'price' }
    ];
  }

  protected getRowData(): any[] {
    return [
      { make: 'Toyota', model: 'Corolla', price: 25000 },
      { make: 'Ford', model: 'Fusion', price: 27000 },
      { make: 'Tesla', model: 'Model 3', price: 42000 }
    ]
  }

}
