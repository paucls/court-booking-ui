import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { CalendarModule } from 'angular-calendar';

import { AppComponent } from './app.component';
import { CourtsAvailabilityComponent } from './courts-availability/courts-availability.component';
import { CourtScheduleComponent } from './courts-availability/court-schedule/court-schedule.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { BookingsService } from './my-bookings/bookings.service';
import { BookingCardComponent } from './my-bookings/booking-card/booking-card.component';
import { CourtsService } from './courts-availability/courts.service';

const appRoutes: Routes = [
  {path: 'courts-availability', component: CourtsAvailabilityComponent},
  {path: 'my-bookings', component: MyBookingsComponent},
  {path: '', redirectTo: 'courts-availability', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CourtsAvailabilityComponent,
    CourtScheduleComponent,
    MyBookingsComponent,
    BookingCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ClarityModule,
    CalendarModule.forRoot()
  ],
  providers: [
    BookingsService,
    CourtsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
