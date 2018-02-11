import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CourtsAvailabilityComponent } from './courts-availability.component';
import { CalendarModule } from 'angular-calendar';
import { CourtsService } from './courts.service';
import { Observable } from 'rxjs/Observable';
import { Court } from './court.model';

describe('CourtsAvailabilityComponent', () => {
  let component: CourtsAvailabilityComponent;
  let fixture: ComponentFixture<CourtsAvailabilityComponent>;
  let courtsService: CourtsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [CalendarModule.forRoot()],
      providers: [{
        provide: CourtsService, useClass: class {getCourts(clubId) { }}
      }],
      declarations: [CourtsAvailabilityComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourtsAvailabilityComponent);
    component = fixture.componentInstance;
    courtsService = getTestBed().get(CourtsService);
  }));

  it('should get courts on initialisation', () => {
    const courts: Court[] = [{id: 'court-id-1'} as Court];
    spyOn(courtsService, 'getCourts').and.returnValue(Observable.of(courts));
    fixture.detectChanges();

    expect(component.courts).toEqual(courts);
  });

});
