import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CourtsAvailabilityComponent } from './courts-availability.component';
import { CalendarModule } from 'angular-calendar';

describe('CourtsAvailabilityComponent', () => {
  let component: CourtsAvailabilityComponent;
  let fixture: ComponentFixture<CourtsAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ CalendarModule.forRoot() ],
      declarations: [ CourtsAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtsAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
