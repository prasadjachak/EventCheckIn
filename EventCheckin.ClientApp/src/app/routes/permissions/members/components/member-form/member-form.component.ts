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

import { RolesService, UserService } from 'app/api/services';
import { finalize } from 'rxjs';
import { MemberModal } from '..';
import { ToastrService } from 'ngx-toastr';
// SERVICES


@Component({
  selector: 'member-from',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss'],
})
export class MemberFormComponent implements OnInit {
  @Input() userData!: UserModel;
  isLoading = true;
  // SHOW AND HIDE PW FOR USER EXPERIENCE
  showPassword: boolean = false;
  // USER FORM GROUP
  memberForm!: FormGroup;

  constructor(
    private formValidationService: FormValidationService,
    private userService: UserService,
    private toastr: ToastrService,
  ) {
    // INIT USER FORM
  }

  ngOnInit(): void {
    this.memberForm = this.initmemberForm;
    console.log(this.userData);
  }

  // GET USER FORM DATA
  get getFormData() {
    console.log(this.userData);
    console.log(this.memberForm.value);
    console.log(this.memberForm);
    return { ...this.memberForm.value };
  }

  // USER FORM PROPERTIES
  private get initmemberForm() {
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
        memberNo: new FormControl(this.userData?.memberNo || '', [
        ]),
        phoneNumber: new FormControl(this.userData?.phoneNumber || '',
          [
            Validators.required
          ]
        )
      }
      // TODO CAN ACTIVATE FOR BETTER PERFORMANCE
      // { updateOn: 'blur' }
    );
  }

  // FIELD ERROR
  fieldHasError(fieldName: string): boolean {
    return this.formValidationService.fieldHasError(fieldName, this.memberForm);
  }
  // FIELD ERROR MESSAGE
  getErrorMessage(fieldName: string): string {
    return this.formValidationService.getErrorMessage(fieldName, this.memberForm);
  }

  // CUSTOM VALIDATOR
  private passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const passwordVal = this.memberForm?.get('password')?.value;
      const forbidden = control.value !== passwordVal;
      return forbidden ? { mismatch: true } : null;
    };
  }

  async changePassword(){

  }
}
