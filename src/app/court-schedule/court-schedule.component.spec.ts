import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtScheduleComponent } from './court-schedule.component';
import { CalendarModule } from 'angular-calendar';

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
    fixture.detectChanges();
  });

  it('should render title containing court number', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Schedule Court 1');
  }));

});
