import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { CourtSchedule, CourtTime, Entry } from '../court-schedule.model';

@Component({
  selector: 'app-court-schedule',
  templateUrl: './court-schedule.component.html'
})
export class CourtScheduleComponent implements OnInit {
  @Input() schedule: CourtSchedule;
  @Output() availableTimeClicked = new EventEmitter<CourtTime>();

  viewDate: Date;
  calendarEvents: CalendarEvent[] = [];

  ngOnInit(): void {
    this.viewDate = new Date(this.schedule.day);
    this.calendarEvents = this.mapToCalendarEvents(this.schedule.entries);
  }

  timeClicked({date}) {
    if (this.isAvailableTime(date)) {
      this.availableTimeClicked.emit({court: this.schedule.court, startTime: date});
    }
  }

  private isAvailableTime(date: Date): boolean {
    return !this.calendarEvents.some((calendarEvent) => {
      return date.getTime() >= calendarEvent.start.getTime() &&
        date.getTime() < calendarEvent.end.getTime();
    });
  }

  private mapToCalendarEvents(events: Entry[]) {
    return events.map(event => {
      return {
        start: new Date(event.start),
        end: new Date(event.end),
        title: event.description,
        color: {primary: '#e3bc08', secondary: '#FDF1BA'}
      };
    });
  }
}
