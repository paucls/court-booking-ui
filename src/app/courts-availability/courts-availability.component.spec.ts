import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CalendarModule } from 'angular-calendar';
import { Observable } from 'rxjs/Observable';

import { CourtsAvailabilityComponent } from './courts-availability.component';
import { CourtSchedulesService } from './court-schedules.service';
import { CourtSchedule } from './court-schedule.model';

describe('CourtsAvailabilityComponent', () => {
  let component: CourtsAvailabilityComponent;
  let fixture: ComponentFixture<CourtsAvailabilityComponent>;
  let courtSchedulesService: CourtSchedulesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [CalendarModule.forRoot()],
      providers: [{
        provide: CourtSchedulesService, useClass: class {getCourtSchedules(clubId, day) { }}
      }],
      declarations: [CourtsAvailabilityComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourtsAvailabilityComponent);
    component = fixture.componentInstance;
    courtSchedulesService = TestBed.get(CourtSchedulesService);
  }));

  it('should get court schedules on initialisation', () => {
    const courtSchedules: CourtSchedule[] = [{} as CourtSchedule];
    spyOn(courtSchedulesService, 'getCourtSchedules').and.returnValue(Observable.of(courtSchedules));
    fixture.detectChanges();

    expect(component.courtSchedules).toEqual(courtSchedules);
  });

});
