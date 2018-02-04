import { Component, Input } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-court-schedule',
  templateUrl: './court-schedule.component.html'
})
export class CourtScheduleComponent {
  @Input() courtName: string;
  @Input() viewDate: Date;
  @Input() events: CalendarEvent[];
}
