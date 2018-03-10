import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClrAlertModule } from '@clr/angular';

import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    ClrAlertModule
  ],
  declarations: [
    AlertComponent
  ],
  exports: [
    AlertComponent
  ]
})
export class SharedModule {}
