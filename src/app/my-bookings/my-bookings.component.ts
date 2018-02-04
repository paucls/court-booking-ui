import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html'
})
export class MyBookingsComponent implements OnInit {

  bookings: Booking[];

  constructor(private bookingsService: BookingsService) { }

  ngOnInit() {
    this.bookingsService.getBookings()
      .subscribe(bookings => this.bookings = bookings);
  }

}
