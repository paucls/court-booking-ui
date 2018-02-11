import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtScheduleComponent);
    component = fixture.componentInstance;
  });

  it('should render title containing court number', async(() => {
    component.court = {name: 'Court 1'} as Court;
    component.events = [];
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Court 1');
  }));

});
