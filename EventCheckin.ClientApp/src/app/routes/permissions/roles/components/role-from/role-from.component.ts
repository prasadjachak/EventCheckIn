import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup
} from '@angular/forms';
import { FormValidationService } from '@shared/services/form/form-validation.service';
import { RoleModel } from 'app/api/models/role-model';

// SERVICES

@Component({
  selector: 'role-from',
  templateUrl: './role-from.component.html',
  styleUrls: ['./role-from.component.scss'],
})
export class RoleFromComponent implements OnInit {
  @Input() roleData!: RoleModel;

  // SHOW AND HIDE PW FOR USER EXPERIENCE
  showPassword: boolean = false;
  // USER FORM GROUP
  roleForm!: FormGroup;
  constructor(
    private formValidationService: FormValidationService
  ) {
    // INIT USER FORM
  }

  ngOnInit(): void {
    this.roleForm = this.initroleForm;
  }
  // GET USER FORM DATA
  get getFormData() {
    return { ...this.roleForm.value, role: this.roleForm.value?.role || 1 };
  }
  // USER FORM PROPERTIES
  private get initroleForm() {

    return new FormGroup(
      {
        name: new FormControl(this.roleData?.name || '', [
          Validators.required,
          Validators.maxLength(60),
        ]),
      }
      // TODO CAN ACTIVATE FOR BETTER PERFORMANCE
      // { updateOn: 'blur' }
    );
  }

  // FIELD ERROR
  fieldHasError(fieldName: string): boolean {
    return this.formValidationService.fieldHasError(fieldName, this.roleForm);
  }
  // FIELD ERROR MESSAGE
  getErrorMessage(fieldName: string): string {
    return this.formValidationService.getErrorMessage(fieldName, this.roleForm);
  }

}
