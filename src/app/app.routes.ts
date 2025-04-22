import { Routes } from '@angular/router';
import { MainComponent } from './pages/main-page/main.component';
import { CarGridComponent } from './pages/grid-pages/car-grid/car-grid.component';

export const routes: Routes = [
    {
        component: CarGridComponent,
        path: 'cars'
    },
    {
        component: MainComponent,
        path: ''
    }
    
];
