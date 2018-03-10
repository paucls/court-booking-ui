import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { CalendarModule } from 'angular-calendar';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

import { AppComponent } from './app.component';
import { CourtsAvailabilityComponent } from './courts-availability/courts-availability.component';
import { CourtScheduleComponent } from './courts-availability/court-schedule/court-schedule.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { BookingsService } from './my-bookings/bookings.service';
import { BookingCardComponent } from './my-bookings/booking-card/booking-card.component';
import { CourtsService } from './courts-availability/courts.service';
import { CourtSchedulesService } from './courts-availability/court-schedules.service';
import { BookCourtModalComponent } from './courts-availability/book-court-modal/book-court-modal.component';
import { SharedModule } from './shared/shared.module';

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
    BookingCardComponent,
    BookCourtModalComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    CalendarModule.forRoot(),
    DateValueAccessorModule,
    SharedModule
  ],
  providers: [
    BookingsService,
    CourtsService,
    CourtSchedulesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
