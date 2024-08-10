import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { FormValidationService } from '@shared/services/form/form-validation.service';
import { RoleModel, UserModel } from 'app/api/models';

import { GuestService, RolesService, UserService } from 'app/api/services';
import { finalize } from 'rxjs';
import { GuestModal } from '..';
import { ToastrService } from 'ngx-toastr';
// SERVICES


@Component({
  selector: 'guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss'],
})
export class GuestFormComponent implements OnInit {
  @Input() userData!: UserModel;
  isLoading = true;
  // SHOW AND HIDE PW FOR USER EXPERIENCE
  showPassword: boolean = false;
  // USER FORM GROUP
  guestForm!: FormGroup;

  constructor(
    private formValidationService: FormValidationService,
    private userService: GuestService,
    private toastr: ToastrService,
  ) {
    // INIT USER FORM
  }

  ngOnInit(): void {
    this.guestForm = this.initguestForm;
    console.log(this.userData);
  }

  // GET USER FORM DATA
  get getFormData() {
    console.log(this.userData);
    console.log(this.guestForm.value);
    console.log(this.guestForm);
    return { ...this.guestForm.value };
  }

  // USER FORM PROPERTIES
  private get initguestForm() {
    const passwordValidator = [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      Validators.pattern(
        '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
      ),
    ];
    const passwordConfirmValidator = [
      ...passwordValidator,
      this.passwordMatchValidator(),
    ];

    return new FormGroup(
      {
        name: new FormControl(this.userData?.name || '', [
        ]),

        phoneNumber: new FormControl(this.userData?.phoneNumber || '',
          [
            Validators.required
          ]
        ),
        deviceId: new FormControl(this.userData?.deviceId || '',
          [
          ]
        )
      }
      // TODO CAN ACTIVATE FOR BETTER PERFORMANCE
      // { updateOn: 'blur' }
    );
  }

  // FIELD ERROR
  fieldHasError(fieldName: string): boolean {
    return this.formValidationService.fieldHasError(fieldName, this.guestForm);
  }
  // FIELD ERROR MESSAGE
  getErrorMessage(fieldName: string): string {
    return this.formValidationService.getErrorMessage(fieldName, this.guestForm);
  }

  // CUSTOM VALIDATOR
  private passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const passwordVal = this.guestForm?.get('password')?.value;
      const forbidden = control.value !== passwordVal;
      return forbidden ? { mismatch: true } : null;
    };
  }

  async changePassword(){

  }
}
