import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarModule } from 'angular-calendar';
import { CourtScheduleComponent } from './court-schedule/court-schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    CourtScheduleComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
