import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CourtSchedulesService } from './court-schedules.service';
import { Court } from './court.model';
import { CourtSchedule } from './court-schedule.model';

describe('CourtSchedulesService', () => {
  let courtSchedulesService: CourtSchedulesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourtSchedulesService]
    });

    courtSchedulesService = testBed.get(CourtSchedulesService);
    httpMock = testBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get court schedules for a given day', () => {
    const clubId = 'club-id-1';
    const day = '2018-02-15';
    const courtSchedules: CourtSchedule[] = [{day: new Date(day)} as CourtSchedule];

    courtSchedulesService.getCourtSchedules(clubId, day).subscribe(response => {
      expect(response).toBe(courtSchedules);
    });

    httpMock
      .expectOne({method: 'GET', url: `/api/${clubId}/court-schedules?day=${day}`})
      .flush(courtSchedules);
  });
});
