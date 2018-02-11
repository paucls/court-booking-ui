import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { CourtsService } from './courts.service';
import { Court } from './court.model';
import { DEMO_CLUB_ID } from '../app.constants';

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
  courts: Court[];

  constructor(private courtsService: CourtsService) { }

  ngOnInit() {
    this.courtsService.getCourts(DEMO_CLUB_ID).subscribe(courts => this.courts = courts);
  }

  viewNextDate() {
    this.viewDate = new Date(this.viewDate.setDate(this.viewDate.getDate() + 1));
  }

  viewPreviousDate() {
    this.viewDate = new Date(this.viewDate.setDate(this.viewDate.getDate() - 1));
  }
}
