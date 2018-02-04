import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html'
})
export class BookingCardComponent {

  @Input() booking: Booking;

  @Output() onConfirmed = new EventEmitter<string>();
  @Output() onCancelled = new EventEmitter<string>();

  confirm() {
    this.onConfirmed.emit(this.booking.id);
  }

  cancel() {
    this.onCancelled.emit(this.booking.id);
  }
}
