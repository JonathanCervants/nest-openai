import { Routes } from '@angular/router';

export const routes: Routes = [
    {
         path: '',
         component: DashboardLayoutComponent,
         children:[
            {
                path: 'ortography',
                loadComponent:() =>
                    import(
                        './presentation/pages/orthographyPage/orthographyPage.component'
                    )
            }
         ]
    }
];
