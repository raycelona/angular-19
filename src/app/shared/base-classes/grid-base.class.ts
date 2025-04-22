import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { AgGridConfig } from '@shared/interfaces/ag-grid-config';

export abstract class GridBaseClass {
  private _gridName: string;
  private _columnDefs: ColDef[];
  private _rowData: any[];
  private _agGridConfig!: AgGridConfig;

  public get gridName(): string {
    return this._gridName;
  }

  public get columnDefs(): ColDef[] {
    return this._columnDefs;
  }

  public get rowData(): any[] {
    return this._rowData;
  }

  public get agGridConfig(): AgGridConfig {
    return this._agGridConfig;
  }

  protected updateGridName(gridName: string): string {
    return this._gridName = gridName;
  }

  protected populateGrid(): void {
    this._agGridConfig = {
      columnDefs: this.getColumnDefs(),
      rowData: this.getRowData()
    }

    this._columnDefs = this.agGridConfig.columnDefs;
    this._rowData = this.agGridConfig.rowData;
  };

  protected abstract getColumnDefs(): ColDef[];
  protected abstract getRowData(): any[];

  public onGridReady(event: GridReadyEvent): void {
    console.log('Grid is ready', event);
  }

}
