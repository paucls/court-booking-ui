import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-courts-availability',
  templateUrl: './courts-availability.component.html',
  styleUrls: ['./courts-availability.component.css']
})
export class CourtsAvailabilityComponent implements OnInit {

  view = 'day';
  viewDate: Date = new Date(2018, 2, 1);
  events: CalendarEvent[] = [
    {
      start: new Date(2018, 2, 1, 14, 0),
      end: new Date(2018, 2, 1, 14, 40),
      title: 'John Doe',
      color: {primary: '#e3bc08', secondary: '#FDF1BA'}
    },
    {
      start: new Date(2018, 2, 1, 16, 0),
      end: new Date(2018, 2, 1, 16, 40),
      title: 'Mary Johns',
      color: {primary: '#e3bc08', secondary: '#FDF1BA'}
    }
  ];

  ngOnInit() {
  }

  viewNextDate() {
    this.viewDate = new Date(this.viewDate.setDate(this.viewDate.getDate() + 1));
  }

  viewPreviousDate() {
    this.viewDate = new Date(this.viewDate.setDate(this.viewDate.getDate() - 1));
  }
}
