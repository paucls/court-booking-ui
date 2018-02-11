import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Booking } from './booking.model';

@Injectable()
export class BookingsService {

  constructor(private http: HttpClient) {}

  getBookings(clubId: string): Observable<Booking[]> {
    const url = `/api/${clubId}/bookings`;
    return this.http.get<Booking[]>(url);
  }

  confirmBooking(bookingId: string): Observable<Booking> {
    const url = `/api/bookings/${bookingId}/confirm`;
    return this.http.post<Booking>(url, bookingId);
  }

  cancelBooking(bookingId: string): Observable<Booking> {
    const url = `/api/bookings/${bookingId}/cancel`;
    return this.http.post<Booking>(url, bookingId);
  }

}
