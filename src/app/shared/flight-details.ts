import { FlightDetailsService } from './flight-details.service';

export interface SkyItineraries {
    id: string;
    legs: string[];
    price: string;
    agent: string;
    agent_rating: number;
}

export interface SkyILeg {
    id: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: string;
    arrival_time: string;
    stops: number;
    airline_name: string;
    airline_id: string;
    duration_mins: string;
}

export class SkyIFlight {
    itineraries: SkyItineraries[];
    legs: SkyILeg[];
}

export class ItinerarieModel implements SkyItineraries {
    id: string;
    price: string;
    agent: string;
    agent_rating: number;
    legs: string[];
    legModellist: LegModel[];

    setItineraries(model: SkyItineraries) {
        this.id = model.id;
        this.price = model.price;
        this.agent = model.agent;
        this.agent_rating = model.agent_rating;
        this.legs = model.legs;
    }

    makeLegModels(list: LegModel[]): void {
        this.legModellist = list.filter(x => this.legs.includes(x.id));
    }
}

export class LegModel implements SkyILeg {
    id: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: string;
    arrival_time: string;
    stops: number;
    airline_name: string;
    airline_id: string;
    duration_mins: string;

    constructor(private flightDetailsService: FlightDetailsService) {}
    setSkyILeg(mode: SkyILeg) {
        this.id = mode.id;
        this.departure_airport = mode.departure_airport;
        this.arrival_airport = mode.arrival_airport;
        this.departure_time = mode.departure_time;
        this.stops = mode.stops;
        this.arrival_time = mode.arrival_time;
        this.airline_id = mode.airline_id;
        this.duration_mins = mode.duration_mins;
    }

    getairLineLogoImageUrl(): string {
        return 'https://logos.skyscnr.com/images/airlines/favicon/' + this.airline_id + '.png';
    }

    departureDisplayTime(): string {
        return this.departure_time.split('T')[1];
    }

    arrivalDisplayTime(): string {
        return this.arrival_time.split('T')[1];
    }

    tripDisplayTime(): string {
       return this.flightDetailsService.formatTripDisplayTime(this.duration_mins);
    }

    stopsDisplay(): string {
        return (this.stops === 0) ? 'Direct' : this.stops.toString() + ' stop';
    }
}
