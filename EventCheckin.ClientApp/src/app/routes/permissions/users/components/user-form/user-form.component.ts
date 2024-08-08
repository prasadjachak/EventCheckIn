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
import { UserModal } from '..';
import { ToastrService } from 'ngx-toastr';
// SERVICES


@Component({
  selector: 'user-from',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() userData!: UserModel;
  isLoading = true;
  // SHOW AND HIDE PW FOR USER EXPERIENCE
  showPassword: boolean = false;
  // USER FORM GROUP
  userForm!: FormGroup;

  constructor(
    private formValidationService: FormValidationService,
    private userService: UserService,
    private toastr: ToastrService,
  ) {
    // INIT USER FORM
  }

  ngOnInit(): void {
    this.userForm = this.inituserForm;
    console.log(this.userData);
    this.userForm.get('roleId').patchValue(this.userData.roleId, { onlySelf: true });
  }

  // GET USER FORM DATA
  get getFormData() {
    console.log(this.userData);
    console.log(this.userForm.value);
    console.log(this.userForm);
    return { ...this.userForm.value, role: this.userForm.value?.roleId || 1 };
  }

  // USER FORM PROPERTIES
  private get inituserForm() {
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
        firstName: new FormControl(this.userData?.firstName || '', [
          Validators.required,
          Validators.maxLength(60),
        ]),
        lastName: new FormControl(this.userData?.lastName || '', [
          Validators.required,
          Validators.maxLength(60),
        ]),
        roleId: new FormControl(this.userData.roleId || '', []),
        email: new FormControl(this.userData?.email || '',
          [
            Validators.required,
            Validators.email
          ]
        ),
        username: new FormControl(this.userData?.userName || '',
          [
            Validators.required,
          ]
        ),
        password: new FormControl('', this.userData ? [] : passwordValidator),
        passwordConfirm: new FormControl(
          '',
          this.userData ? [] : passwordConfirmValidator
        ),
      }
      // TODO CAN ACTIVATE FOR BETTER PERFORMANCE
      // { updateOn: 'blur' }
    );
  }

  // FIELD ERROR
  fieldHasError(fieldName: string): boolean {
    return this.formValidationService.fieldHasError(fieldName, this.userForm);
  }
  // FIELD ERROR MESSAGE
  getErrorMessage(fieldName: string): string {
    return this.formValidationService.getErrorMessage(fieldName, this.userForm);
  }

  // CUSTOM VALIDATOR
  private passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const passwordVal = this.userForm?.get('password')?.value;
      const forbidden = control.value !== passwordVal;
      return forbidden ? { mismatch: true } : null;
    };
  }

  async changePassword(){

  }
}
