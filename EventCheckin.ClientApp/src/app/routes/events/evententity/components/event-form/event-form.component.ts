import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup
} from '@angular/forms';
import { FormValidationService } from '@shared/services/form/form-validation.service';
import { EventModel } from 'app/api/models/event-model';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';

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
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  @Input() eventData!: EventModel;

  // SHOW AND HIDE PW FOR USER EXPERIENCE
  showPassword: boolean = false;
  // USER FORM GROUP
  eventForm!: FormGroup;
  constructor(
    private formValidationService: FormValidationService
  ) {
    // INIT USER FORM
  }

  ngOnInit(): void {
    this.eventForm = this.initeventForm;
  }
  // GET USER FORM DATA
  get getFormData() {
    return { ...this.eventForm.value, event: this.eventForm.value?.event || 1 };
  }
  // USER FORM PROPERTIES
  private get initeventForm() {

    return new FormGroup(
      {
        name: new FormControl(this.eventData?.name || '', [
          Validators.required,
          Validators.maxLength(60),
        ]),
        startDate: new FormControl(this.eventData.startDate ||  moment(),
        [
        ]),
        endDate: new FormControl(this.eventData.startDate || moment(),
        [
        ]),
        venueAddress1: new FormControl(this.eventData?.venueAddress1 || '', [
        ]),
        isLive: new FormControl(this.eventData?.isLive || false, [
        ]),
      },

      // TODO CAN ACTIVATE FOR BETTER PERFORMANCE
      // { updateOn: 'blur' }
    );
  }

  // FIELD ERROR
  fieldHasError(fieldName: string): boolean {
    return this.formValidationService.fieldHasError(fieldName, this.eventForm);
  }
  // FIELD ERROR MESSAGE
  getErrorMessage(fieldName: string): string {
    return this.formValidationService.getErrorMessage(fieldName, this.eventForm);
  }

}
