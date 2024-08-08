import { Component, OnInit, Input, OnDestroy, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DateAdapter, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ControlsOf, IProfile, PageHeaderComponent } from '@shared';

import {
  FormsModule,
  ReactiveFormsModule,
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
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    TranslateModule,
    PageHeaderComponent,
  ],
})
export class RoleFromComponent implements OnInit {
  @Input() roleData!: RoleModel;

  // SHOW AND HIDE PW FOR USER EXPERIENCE
  showPassword: boolean = false;
  // USER FORM GROUP
  roleForm!: FormGroup;
  constructor(
    private formValidationService : FormValidationService
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
