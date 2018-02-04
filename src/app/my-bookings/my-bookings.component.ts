import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html'
})
export class MyBookingsComponent implements OnInit {

  static bookingConfirmed = 'Booking confirmed successfully';
  static bookingCancelled = 'Booking cancelled successfully';

  bookings: Booking[];
  alertSuccessContent = '';

  constructor(private bookingsService: BookingsService) { }

  ngOnInit() {
    this.bookingsService.getBookings()
      .subscribe(bookings => this.bookings = bookings);
  }

  confirmBooking(bookingId: string) {
    this.bookingsService.confirmBooking(bookingId)
      .subscribe(() => this.alertSuccessContent = MyBookingsComponent.bookingConfirmed);
  }

  cancelBooking(bookingId: string) {
    this.bookingsService.cancelBooking(bookingId)
      .subscribe(() => this.alertSuccessContent = MyBookingsComponent.bookingCancelled);
  }

  closeAlertSuccess() {
    this.alertSuccessContent = '';
  }
}
