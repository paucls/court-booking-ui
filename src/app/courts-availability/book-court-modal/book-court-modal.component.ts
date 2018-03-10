import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DEMO_CLUB_ID } from '../../app.constants';
import { CourtTime } from '../court-schedule.model';
import { Booking } from '../../my-bookings/booking.model';
import { BookingsService } from '../../my-bookings/bookings.service';

@Component({
  selector: 'app-book-court-modal',
  templateUrl: './book-court-modal.component.html'
})
export class BookCourtModalComponent implements OnInit {

  @Input() courtTimeToBook: CourtTime;
  @Output() courtBooked = new EventEmitter();
  @Output() modalClosed = new EventEmitter();

  form: FormGroup;

  constructor(private bookingsService: BookingsService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    const startTime = this.courtTimeToBook.startTime;
    const endTime = new Date(startTime.getTime() + 30 * 60000);

    this.form = this.formBuilder.group({
      start: [startTime, [Validators.required]],
      end: [endTime, [Validators.required]]
    });
  }

  cancel() {
    this.modalClosed.emit();
  }

  submit() {
    const booking: Booking = {
      courtId: this.courtTimeToBook.court.id,
      ...this.form.value
    };

    this.bookingsService
      .createBooking(DEMO_CLUB_ID, booking)
      .subscribe((response) => {
        this.courtBooked.emit(response);
      });
  }

}
