import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Court } from './court.model';

@Injectable()
export class CourtsService {

  constructor(private httpClient: HttpClient) { }

  getCourts(clubId: string): Observable<Court[]> {
    return this.httpClient.get<Court[]>(`/api/${clubId}/courts`);
  }
}
