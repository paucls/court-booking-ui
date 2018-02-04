import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html'
})
export class BookingCardComponent {
  @Input() booking: Booking;
}
