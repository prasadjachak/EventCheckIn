import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '@core/authentication/auth.service';
import { User } from '@core/authentication/interface';
import { ControlsOf, IProfile } from '@shared';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class ProfileSettingsComponent {
  user!: User;

  reactiveForm = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    city: ['', [Validators.required]],
    address: ['', [Validators.required]],
    mobile: ['', [Validators.required]],

  });

  constructor(private fb: FormBuilder,
    private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user().subscribe(user => (this.user = user));
    this.reactiveForm.patchValue({
      username : this.user.username,
      email : this.user.email,
      mobile : this.user.phone,
      city : this.user.city,
      address : this.user.streetAddress,

    });
  }


  getErrorMessage(form: FormGroup<ControlsOf<IProfile>>) {
    return form.get('email')?.hasError('required')
      ? 'You must enter a value'
      : form.get('email')?.hasError('email')
      ? 'Not a valid email'
      : '';
  }
}
