import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CourtsService } from './courts.service';
import { Court } from './court.model';

describe('CourtsService', () => {
  let courtsService: CourtsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourtsService]
    });

    courtsService = testBed.get(CourtsService);
    httpMock = testBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get courts', () => {
    const clubId = 'club-id-1';
    const courts: Court[] = [{id: 'court-id-1'} as Court];

    courtsService.getCourts(clubId).subscribe(response => {
      expect(response).toBe(courts);
    });

    httpMock
      .expectOne({method: 'GET', url: `/api/${clubId}/courts`})
      .flush(courts);
  });
});
