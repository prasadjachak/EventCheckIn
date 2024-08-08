import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleFromComponent } from './role-from.component';

describe('RoleFromComponent', () => {
  let component: RoleFromComponent;
  let fixture: ComponentFixture<RoleFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
