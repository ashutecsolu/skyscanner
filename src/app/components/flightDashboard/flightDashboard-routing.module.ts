import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightScannerDashboardComponent } from './flightScannerDashboard.component';

const routes: Routes = [
  {
    path: '',
    component: FlightScannerDashboardComponent,
    data: {
      title: 'Skyscanner Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightDashboardRoutingModule {}
