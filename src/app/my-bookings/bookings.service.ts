import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Booking } from './booking.model';

@Injectable()
export class BookingsService {

  constructor(private http: HttpClient) {}

  getBookings(clubId: string): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.buildUrl(clubId));
  }

  createBooking(clubId: string, booking: Booking) {
    return this.http.post<Booking>(this.buildUrl(clubId), booking);
  }

  confirmBooking(bookingId: string): Observable<Booking> {
    const url = `/api/bookings/${bookingId}/confirm`;
    return this.http.post<Booking>(url, bookingId);
  }

  cancelBooking(bookingId: string): Observable<Booking> {
    const url = `/api/bookings/${bookingId}/cancel`;
    return this.http.post<Booking>(url, bookingId);
  }

  private buildUrl(clubId: string) {
    return `/api/${clubId}/bookings`;
  }

}
