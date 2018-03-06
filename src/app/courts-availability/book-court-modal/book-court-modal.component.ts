import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourtTime } from '../court-schedule.model';

@Component({
  selector: 'app-book-court-modal',
  templateUrl: './book-court-modal.component.html'
})
export class BookCourtModalComponent implements OnInit {

  @Input() courtTimeToBook: CourtTime;
  @Output() modalClosed = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  cancel() {
    this.modalClosed.emit();
  }

}
