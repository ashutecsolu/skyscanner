import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkyIFlight } from './flight-details';

@Injectable({
  providedIn: 'root'
})
export class FlightDetailsService {

  constructor(private http: HttpClient) { }

  getFlightDetails(): Observable<SkyIFlight> {
    return this.http.get<SkyIFlight>('assets/flightdata/flights.json');
  }

  formatTripDisplayTime(duration_mins): string {
    const d = Number(duration_mins) * 60;
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);

    const hDisplay = h > 0 ? h + (h === 1 ? 'h ' : 'h ') : '';
    const mDisplay = m > 0 ? m + (m === 1 ? '' : '') : '';
    const sDisplay = s > 0 ? s + (s === 1 ? '' : '') : '';
    return hDisplay + mDisplay + sDisplay;
  }
}
