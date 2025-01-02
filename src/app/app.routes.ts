import { Routes } from '@angular/router';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    {
        path:"counter",
        component:CounterPageComponent,
        // canMatch:[AuthGuard],
    },
    {
        path:"main",
        component:MainPageComponent,
        // canMatch:[AuthGuard],
    },
];
