import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CalendarModule } from 'angular-calendar';
import { Observable } from 'rxjs/Observable';

import { CourtsAvailabilityComponent } from './courts-availability.component';
import { CourtSchedulesService } from './court-schedules.service';
import { CourtSchedule, CourtTime } from './court-schedule.model';

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

  it('should open book court modal', () => {
    const courtTime = {court: {}, startTime: new Date()} as CourtTime;
    expect(component.isBookCourtModalOpened).toBe(false);

    component.openBookCourtModal(courtTime);

    expect(component.isBookCourtModalOpened).toBe(true);
    expect(component.courtTimeToBook).toBe(courtTime);
  });

  it('should close book court modal', () => {
    component.isBookCourtModalOpened = true;

    component.closeBookCourtModal();

    expect(component.isBookCourtModalOpened).toBe(false);
  });

  it('should reload schedules on court booked', () => {
    spyOn(courtSchedulesService, 'getCourtSchedules').and.returnValue(Observable.of([]));
    fixture.detectChanges();

    component.onCourtBooked();

    expect(courtSchedulesService.getCourtSchedules).toHaveBeenCalled();
  });

  it('should notify success on court booked', () => {
    spyOn(courtSchedulesService, 'getCourtSchedules').and.returnValue(Observable.of([]));
    fixture.detectChanges();

    component.onCourtBooked();

    expect(component.showAlert).toEqual({text: 'Court booked successfully', severity: 'success'});
  });

});
