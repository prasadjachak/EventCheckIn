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
    this.userForm.get('roleIds').patchValue(this.userData.roleIds, { onlySelf: true });
  }

  // GET USER FORM DATA
  get getFormData() {
    console.log(this.userData);
    console.log(this.userForm.value);
    console.log(this.userForm);
    return { ...this.userForm.value, roleIds: this.userForm.value?.roleIds || 1 };
  }

  // USER FORM PROPERTIES
  private get inituserForm() {

    return new FormGroup(
      {
        name: new FormControl(this.userData?.name || '', [
        ]),

        roleIds: new FormControl(this.userData.roleIds || '', []),
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
    return this.formValidationService.fieldHasError(fieldName, this.userForm);
  }
  // FIELD ERROR MESSAGE
  getErrorMessage(fieldName: string): string {
    return this.formValidationService.getErrorMessage(fieldName, this.userForm);
  }


  async changePassword(){

  }
}
