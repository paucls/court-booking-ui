import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourtTime } from '../court-schedule.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-court-modal',
  templateUrl: './book-court-modal.component.html'
})
export class BookCourtModalComponent implements OnInit {

  @Input() courtTimeToBook: CourtTime;
  @Output() modalClosed = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

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

}
