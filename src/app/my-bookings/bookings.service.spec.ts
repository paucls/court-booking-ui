import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookingsService } from './bookings.service';
import { Booking } from './booking.model';

describe('BookingsService', () => {
  let bookingsService: BookingsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookingsService]
    });

    bookingsService = TestBed.get(BookingsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get bookings', () => {
    const clubId = 'club-id-1';
    const bookings: Booking[] = [{id: '1'} as Booking];

    bookingsService.getBookings(clubId).subscribe(response => {
      expect(response).toBe(bookings);
    });

    httpMock
      .expectOne({method: 'GET', url: `/api/${clubId}/bookings`})
      .flush(bookings);
  });
});
