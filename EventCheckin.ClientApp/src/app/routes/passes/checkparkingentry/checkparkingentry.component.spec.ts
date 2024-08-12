import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPassListComponent } from './ticketpass-list.component';

describe('EventListComponent', () => {
  let component: TicketPassListComponent;
  let fixture: ComponentFixture<TicketPassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketPassListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketPassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
