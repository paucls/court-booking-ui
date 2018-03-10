import { Component, Input } from '@angular/core';
import { Alert } from './alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: []
})
export class AlertComponent {
  @Input() showAlert: Alert;

  getAlertType() {
    return `alert-${this.showAlert.severity}`;
  }
}
