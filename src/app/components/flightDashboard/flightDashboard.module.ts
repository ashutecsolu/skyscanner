import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { FlightDashboardRoutingModule } from './flightDashboard-routing.module';
import { FlightScannerDashboardComponent } from './flightScannerDashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlightDashboardRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [FlightScannerDashboardComponent ]
})
export class FlightDashboardModule { }
