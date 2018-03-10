import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';
import { Booking } from './booking.model';
import { DEMO_CLUB_ID } from '../app.constants';
import { Alert } from '../shared/alert/alert.model';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html'
})
export class MyBookingsComponent implements OnInit {

  static bookingConfirmed: Alert = {text: 'Booking confirmed successfully', severity: 'success'};
  static bookingCancelled: Alert = {text: 'Booking cancelled successfully', severity: 'success'};

  bookings: Booking[];
  showAlert: Alert;

  constructor(private bookingsService: BookingsService) { }

  ngOnInit() {
    this.loadBookings();
  }

  private loadBookings() {
    this.bookingsService.getBookings(DEMO_CLUB_ID)
      .subscribe(bookings => this.bookings = bookings);
  }

  confirmBooking(bookingId: string) {
    this.bookingsService.confirmBooking(bookingId)
      .subscribe(() => {
        this.showAlert = MyBookingsComponent.bookingConfirmed;
        this.loadBookings();
      });
  }

  cancelBooking(bookingId: string) {
    this.bookingsService.cancelBooking(bookingId)
      .subscribe(() => {
        this.showAlert = MyBookingsComponent.bookingCancelled;
        this.loadBookings();
      });
  }

}
