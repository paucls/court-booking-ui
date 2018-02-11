import { Component, Input } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Court } from '../court.model';

@Component({
  selector: 'app-court-schedule',
  templateUrl: './court-schedule.component.html'
})
export class CourtScheduleComponent {
  @Input() court: Court;
  @Input() viewDate: Date;
  @Input() events: CalendarEvent[];
}
