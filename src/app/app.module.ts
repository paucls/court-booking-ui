import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { CalendarModule } from 'angular-calendar';

import { AppComponent } from './app.component';
import { CourtScheduleComponent } from './court-schedule/court-schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    CourtScheduleComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
