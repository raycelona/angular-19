import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { GridBaseClass } from '@shared/base-classes/grid-base.class';
import { CarGridTableViews } from '@pages/grid-pages/car-grid/column-defs.constants';
import { PRIMENG_IMPORTS } from '@shared/imports/prime-ng-shared.imports';
import { SelectItem } from 'primeng/api';
import { CarGridViews } from '@shared/enums/car-grid-views';

@Component({
  selector: 'app-car-grid',
  imports: [AgGridAngular, PRIMENG_IMPORTS],
  templateUrl: './car-grid.component.html',
  styleUrl: './car-grid.component.scss'
})
export class CarGridComponent extends GridBaseClass implements OnInit {
  private tableViews = CarGridTableViews.getGridView();
  public selectedView = CarGridViews.All;
  
  constructor() {
    super();

    this.populateGrid();
  }

  ngOnInit(): void {
    this.updateGridName('Cars');
  }

  public viewOptions: SelectItem[] = [
    {label: 'all', value: 'All'}
  ]

  public onViewChange(e) {
    console.log(e);
  }

  protected getColumnDefs(): ColDef[] {
    return this.tableViews;
  }

  protected getRowData(): any[] {
    return [
      { make: 'Toyota', model: 'Corolla', year: '2020', price: 25000 },
      { make: 'Ford', model: 'Fusion', year: '2020',  price: 27000 },
      { make: 'Tesla', model: 'Model 3', year: '2020',  price: 42000 }
    ]
  }

}
