import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CalendarModule } from 'angular-calendar';

import { CourtScheduleComponent } from './court-schedule.component';
import { Court } from '../court.model';

describe('CourtScheduleComponent', () => {
  let component: CourtScheduleComponent;
  let fixture: ComponentFixture<CourtScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CalendarModule.forRoot()],
      declarations: [CourtScheduleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtScheduleComponent);
    component = fixture.componentInstance;
  });

  it('should render title containing court name', async(() => {
    component.schedule = {day: new Date(), court: {name: 'Court 1'} as Court, entries: []};
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Court 1');
  }));

  it('should raise available time clicked event', fakeAsync(() => {
    component.schedule = {day: new Date(), court: {name: 'Court 1'} as Court, entries: []};
    const testDate = new Date();
    let courtTimeClicked;

    component.availableTimeClicked.subscribe((courtTime) => {
      courtTimeClicked = courtTime;
    });

    component.timeClicked({date: testDate});
    tick();

    expect(courtTimeClicked).toEqual({court: component.schedule.court, date: testDate});
  }));

});
