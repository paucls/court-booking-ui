import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { CourtSchedule } from './court-schedule.model';

@Injectable()
export class CourtSchedulesService {

  constructor(private httpClient: HttpClient) { }

  getCourtSchedules(clubId: string, day: any): Observable<CourtSchedule[]> {
    return this.httpClient.get<CourtSchedule[]>(`/api/${clubId}/court-schedules?day=${day}`);
  }
}
