import { Component, OnInit, Injectable } from '@angular/core';
import { FlightDetailsService } from '../../shared/flight-details.service';
import { ItinerarieModel, LegModel } from '../../shared/flight-details';

@Component({
  templateUrl: 'flightScannerDashboard.component.html'
})
export class FlightScannerDashboardComponent implements OnInit {
  flightList: ItinerarieModel[] = [];

  constructor(private flightDetailsService: FlightDetailsService) { }

  ngOnInit(): void {
    this.flightDetailsService.getFlightDetails().subscribe((flights) => {
      const legs: LegModel[] = [];
      const itineraries: ItinerarieModel[] = [];
      flights.legs.forEach(leg => {
        const model = new LegModel(this.flightDetailsService);
        model.setSkyILeg(leg);
        legs.push(model);
      });
      flights.itineraries.forEach(itinerarie => {
        const model = new ItinerarieModel();
        model.setItineraries(itinerarie);
        model.makeLegModels(legs);
        itineraries.push(model);
      });
      this.flightList = itineraries;
    },
    error => {
      console.log(error);
    });
  }
}

