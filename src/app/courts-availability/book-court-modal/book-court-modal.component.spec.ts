import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClrModalModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';

import { BookCourtModalComponent } from './book-court-modal.component';

describe('BookCourtModalComponent', () => {
  let element;
  let component: BookCourtModalComponent;
  let fixture: ComponentFixture<BookCourtModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ClrModalModule
      ],
      declarations: [BookCourtModalComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCourtModalComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should have a title', () => {
    expect(element.querySelector('.modal-title').textContent).toEqual('Book Court');
  });

  it('should have a cancel button', () => {
    expect(element.querySelector('.modal-footer .cancel-button')).not.toBeNull();
  });

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
