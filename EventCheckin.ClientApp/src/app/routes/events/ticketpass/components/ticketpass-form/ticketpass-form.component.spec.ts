import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPassFormComponent } from './ticketpass-form.component';

describe('TicketPassComponent', () => {
  let component: TicketPassFormComponent;
  let fixture: ComponentFixture<TicketPassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketPassFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketPassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
