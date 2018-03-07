import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClrModalModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookCourtModalComponent } from './book-court-modal.component';
import { Court } from '../court.model';

describe('BookCourtModalComponent', () => {
  let element;
  let component: BookCourtModalComponent;
  let fixture: ComponentFixture<BookCourtModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        ClrModalModule
      ],
      declarations: [BookCourtModalComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCourtModalComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;

    component.courtTimeToBook = {court: {name: 'Court 1'} as Court, startTime: new Date('01/01/2017 16:00')};

    fixture.detectChanges();
  });

  describe('layout', () => {

    it('should have a title', () => {
      expect(element.querySelector('.modal-title').textContent).toEqual('Book Court 1');
    });

    it('should show selected start and end times', () => {
      expect(component.form.controls.start.value).toEqual(new Date('01/01/2017 16:00'));
      expect(component.form.controls.end.value).toEqual(new Date('01/01/2017 16:30'));
    });

    it('should have a cancel button', () => {
      expect(element.querySelector('.modal-footer .cancel-button')).not.toBeNull();
    });

    describe('OK button', () => {

      it('should be disabled when mandatory fields are not filled in', () => {
        fixture.whenStable().then(() => {
          component.form.controls.end.setValue(null);
          fixture.detectChanges();

          const submitButton = element.querySelector('button[type=submit]');

          expect(submitButton.getAttribute('disabled')).not.toBeNull();
        });
      });

    });

  });

  describe('events', () => {

    it('should raise close modal event', fakeAsync(() => {
      let modalClosed = false;

      component.modalClosed.subscribe(() => {
        modalClosed = true;
      });

      element.querySelector('.cancel-button').click();
      tick();

      expect(modalClosed).toBe(true);
    }));

  });

});
