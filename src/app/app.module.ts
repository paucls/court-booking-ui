import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { CalendarModule } from 'angular-calendar';

import { AppComponent } from './app.component';
import { CourtsAvailabilityComponent } from './courts-availability/courts-availability.component';
import { CourtScheduleComponent } from './courts-availability/court-schedule/court-schedule.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';

const appRoutes: Routes = [
  {path: 'courts-availability', component: CourtsAvailabilityComponent},
  {path: 'my-bookings', component: MyBookingsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CourtsAvailabilityComponent,
    CourtScheduleComponent,
    MyBookingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ClarityModule,
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
