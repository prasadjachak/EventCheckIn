import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup
} from '@angular/forms';
import { FormValidationService } from '@shared/services/form/form-validation.service';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import { TicketPassModel } from 'app/api/models';

// SERVICES

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'ticketpass-form',
  templateUrl: './ticketpass-form.component.html',
  styleUrls: ['./ticketpass-form.component.scss'],
})
export class TicketPassFormComponent implements OnInit {
  @Input() ticketpassData!: TicketPassModel;

  // SHOW AND HIDE PW FOR USER EXPERIENCE
  showPassword: boolean = false;
  // USER FORM GROUP
  eventDayForm!: FormGroup;
  constructor(
    private formValidationService: FormValidationService
  ) {
    // INIT USER FORM
  }

  ngOnInit(): void {
    this.eventDayForm = this.initeventForm;
  }
  // GET USER FORM DATA
  get getFormData() {
    return { ...this.eventDayForm.value, event: this.eventDayForm.value?.event || 1 };
  }
  // USER FORM PROPERTIES
  private get initeventForm() {

    return new FormGroup(
      {
        ticketNo: new FormControl(this.ticketpassData?.ticketNo || '', [
          Validators.required,
          Validators.maxLength(60),
        ]),
        allowedGuestCount: new FormControl(this.ticketpassData.allowedGuestCount ||  0,
        [
        ]),
        allowedParkingCount: new FormControl(this.ticketpassData.allowedParkingCount ||  0,
        [
        ]),
        eventId: new FormControl(this.ticketpassData?.eventId || 0, [
        ]),
        userId: new FormControl(this.ticketpassData?.userId || 0, [
        ]),
      },

      // TODO CAN ACTIVATE FOR BETTER PERFORMANCE
      // { updateOn: 'blur' }
    );
  }

  // FIELD ERROR
  fieldHasError(fieldName: string): boolean {
    return this.formValidationService.fieldHasError(fieldName, this.eventDayForm);
  }
  // FIELD ERROR MESSAGE
  getErrorMessage(fieldName: string): string {
    return this.formValidationService.getErrorMessage(fieldName, this.eventDayForm);
  }

}
