import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { CourtSchedule, Entry } from '../court-schedule.model';

@Component({
  selector: 'app-court-schedule',
  templateUrl: './court-schedule.component.html'
})
export class CourtScheduleComponent implements OnInit {
  @Input() schedule: CourtSchedule;

  viewDate: Date;
  calendarEvents: CalendarEvent[] = [];

  ngOnInit(): void {
    this.viewDate = new Date(this.schedule.day);
    this.calendarEvents = this.mapToCalendarEvents(this.schedule.entries);
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
