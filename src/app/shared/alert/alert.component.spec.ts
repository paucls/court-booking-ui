import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClrAlertModule } from '@clr/angular';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let fixture: ComponentFixture<AlertComponent>;
  let component: AlertComponent;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertComponent],
      imports: [ClrAlertModule]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;

    component.showAlert = {text: 'some alert', severity: 'success'};

    fixture.detectChanges();
  });

  describe('layout', () => {

    it('should not be present when showAlert does not exist', () => {
      component.showAlert = null;
      fixture.detectChanges();

      expect(element.querySelector('clr-alert')).toBeNull();
    });

    it('should be present when showAlert exists', () => {
      expect(element.querySelector('clr-alert')).not.toBeNull();
    });

    it('should contain a text', () => {
      expect(element.querySelector('.alert-text').textContent).toContain('some alert');
    });

    it('should use the right severity class', () => {
      expect(element.querySelector('clr-alert').getAttribute('ng-reflect-alert-type')).toEqual('alert-success');

      component.showAlert = {text: 'some alert', severity: 'danger'};
      fixture.detectChanges();

      expect(element.querySelector('clr-alert').getAttribute('ng-reflect-alert-type')).toEqual('alert-danger');
    });
  });
});
