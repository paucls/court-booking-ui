import { Component, OnInit } from '@angular/core';
import { DEMO_CLUB_ID } from '../app.constants';
import { CourtSchedulesService } from './court-schedules.service';
import { CourtSchedule, CourtTime } from './court-schedule.model';

@Component({
  selector: 'app-courts-availability',
  templateUrl: './courts-availability.component.html',
  styleUrls: ['./courts-availability.component.css']
})
export class CourtsAvailabilityComponent implements OnInit {

  view = 'day';
  viewDate: Date;
  courtSchedules: CourtSchedule[];

  isBookCourtModalOpened = false;
  courtTimeToBook: CourtTime;

  constructor(private courtSchedulesService: CourtSchedulesService) { }

  ngOnInit() {
    this.viewDate = new Date();
    this.loadCourtSchedules();
  }

  viewNextDate() {
    this.viewDate = new Date(this.viewDate.setDate(this.viewDate.getDate() + 1));
    this.loadCourtSchedules();
  }

  viewPreviousDate() {
    this.viewDate = new Date(this.viewDate.setDate(this.viewDate.getDate() - 1));
    this.loadCourtSchedules();
  }

  private loadCourtSchedules() {
    const dayString = this.viewDate.toISOString().split('T')[0];
    this.courtSchedulesService.getCourtSchedules(DEMO_CLUB_ID, dayString)
      .subscribe(courtSchedules => this.courtSchedules = courtSchedules);
  }

  openBookCourtModal(courtTime: CourtTime) {
    this.isBookCourtModalOpened = true;
    this.courtTimeToBook = courtTime;
  }

  closeBookCourtModal() {
    this.isBookCourtModalOpened = false;
  }

  onCourtBooked() {
    this.loadCourtSchedules();
    this.closeBookCourtModal();
  }
}
