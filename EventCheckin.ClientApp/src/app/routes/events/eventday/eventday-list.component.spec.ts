import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDayListComponent } from './eventday-list.component';

describe('EventListComponent', () => {
  let component: EventDayListComponent;
  let fixture: ComponentFixture<EventDayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
