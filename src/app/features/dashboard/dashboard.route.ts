// dashboard.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'overview',
        loadChildren: () =>
          import('../overview/overview.module').then(m => m.OverviewModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../products/products.module').then(m => m.ProductsModule),
      }
    ],
  },
];
