import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import layouts
import { DefaultLayoutComponent } from './layouts';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./components/flightDashboard/flightDashboard.module').then(m => m.FlightDashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
