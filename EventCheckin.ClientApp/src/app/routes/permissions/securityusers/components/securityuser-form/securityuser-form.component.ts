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

import { RolesService, SecurityUserService, UserService } from 'app/api/services';
import { finalize } from 'rxjs';
import { SecurityUserModal } from '..';
import { ToastrService } from 'ngx-toastr';
// SERVICES


@Component({
  selector: 'securityuser-form',
  templateUrl: './securityuser-form.component.html',
  styleUrls: ['./securityuser-form.component.scss'],
})
export class SecurityUserFormComponent implements OnInit {
  @Input() userData!: UserModel;
  isLoading = true;
  // SHOW AND HIDE PW FOR USER EXPERIENCE
  showPassword: boolean = false;
  // USER FORM GROUP
  securityUserForm!: FormGroup;

  constructor(
    private formValidationService: FormValidationService,
    private userService: SecurityUserService,
    private toastr: ToastrService,
  ) {
    // INIT USER FORM
  }

  ngOnInit(): void {
    this.securityUserForm = this.initsecurityUserForm;
    console.log(this.userData);
  }

  // GET USER FORM DATA
  get getFormData() {
    console.log(this.userData);
    console.log(this.securityUserForm.value);
    console.log(this.securityUserForm);
    return { ...this.securityUserForm.value, roleIds: this.securityUserForm.value?.roleIds || 1 };
  }

  // USER FORM PROPERTIES
  private get initsecurityUserForm() {
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
        roleIds: new FormControl(this.userData.roleIds || '', []),
      }
      // TODO CAN ACTIVATE FOR BETTER PERFORMANCE
      // { updateOn: 'blur' }
    );
  }

  // FIELD ERROR
  fieldHasError(fieldName: string): boolean {
    return this.formValidationService.fieldHasError(fieldName, this.securityUserForm);
  }
  // FIELD ERROR MESSAGE
  getErrorMessage(fieldName: string): string {
    return this.formValidationService.getErrorMessage(fieldName, this.securityUserForm);
  }

  // CUSTOM VALIDATOR
  private passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const passwordVal = this.securityUserForm?.get('password')?.value;
      const forbidden = control.value !== passwordVal;
      return forbidden ? { mismatch: true } : null;
    };
  }

  async changePassword(){

  }
}
