import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamEmployeeModalComponent } from './team-employee-modal.component';

describe('TeamEmployeeModalComponent', () => {
  let component: TeamEmployeeModalComponent;
  let fixture: ComponentFixture<TeamEmployeeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamEmployeeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamEmployeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
