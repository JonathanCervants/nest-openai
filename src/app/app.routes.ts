import { Routes } from '@angular/router';
import { DashboardLayout } from './presentation/layouts/dashboard-layout/dashboard-layout';
DashboardLayout
export const routes: Routes = [
    {
         path: '',
         component: DashboardLayout,
         children:[
            {
                path: 'ortography',
                loadComponent:() =>
                    import(
                        './presentation/pages/orthography-page/orthography-page'
                       ),
                data:{
                    icon:'fa-solid fa-spell-check',
                    title: 'Ortografía',
                    description: 'Corregir Ortografía'
                }
            },
            {
                path: 'assistant',
                loadComponent:() =>
                    import(
                        './presentation/pages/assistant-page/assistant-page'
                    ),
                data:{
                    icon:'fa-solid fa-spell-check',
                    title: 'Asistente',
                    description: 'Asistente milorD'
                }
            },
         ]
    }
];
