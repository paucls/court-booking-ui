import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class BookingsService {

  getBookings(): Observable<Booking[]> {
    return Observable.of([
      {
        id: 'booking-id-1',
        memberId: 'member-id',
        courtId: 'court-id-1',
        courtName: 'Court 1',
        day: new Date(),
        startTime: new Date(),
        endTime: new Date()
      },
      {
        id: 'booking-id-2',
        memberId: 'member-id',
        courtId: 'court-id-2',
        courtName: 'Court 2',
        day: new Date(2018, 2, 20, 17, 30),
        startTime: new Date(2018, 2, 20, 17, 30),
        endTime: new Date(2018, 2, 20, 16, 0),
      }
    ]);
  }

}
