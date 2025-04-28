import { ColDef } from "ag-grid-community"
import { SelectItem } from 'primeng/api';
import { CarGridViews } from '@shared/enums/car-grid-views';

export class CarGridTableViews {
    public static tableColumns: ColDef[] = [
        { field: 'make' },
        { field: 'model' },
        { field: 'year' },
        { field: 'price' }
    ]

    public static getGridView() {
        return this.tableColumns;
    }
}


