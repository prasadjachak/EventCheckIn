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
import { EventDayModel } from 'app/api/models';

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
  selector: 'eventday-form',
  templateUrl: './eventday-form.component.html',
  styleUrls: ['./eventday-form.component.scss'],
})
export class EventDayFormComponent implements OnInit {
  @Input() eventdayData!: EventDayModel;

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
        eventDayName: new FormControl(this.eventdayData?.eventDayName || '', [
          Validators.required,
          Validators.maxLength(60),
        ]),
        startDate: new FormControl(this.eventdayData.startDate ||  moment(),
        [
        ]),
        endDate: new FormControl(this.eventdayData.startDate || moment(),
        [
        ]),

        eventId: new FormControl(this.eventdayData?.eventId || 0, [
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
