import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/api/services/auth.service';
import { LoginViewModel } from 'app/api/models';
import { TokenService } from '@core/authentication/token.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {
  isSubmitting = false;
  isOtpSubmitting = false;
  otpForm = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });



  otp:string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private tokenService: TokenService,
    private toast: ToastrService
  ) {}

  get username() {
    return this.otpForm.get('username')!;
  }

  get password() {
    return this.otpForm.get('password')!;
  }

  get rememberMe() {
    return this.otpForm.get('rememberMe')!;
  }

  getOtp() {
    this.isSubmitting = true;
    var loginModel : LoginViewModel ={userName:this.username.value, password: this.password.value};
    this.auth
        .apiAuthGetOtpPost$Json$Response({body:loginModel})
        .subscribe(result =>{
          //this.oeeEventModel = result.body.result!;
          console.log(result);
          const loginResponse = result.body.result!;
          this.otp = result.body.result!;

          this.toast.error(result.body.message);
          console.log(loginResponse);
          this.isSubmitting = false;
          // this._snackBar.error('Updated Successfully.');
        });
  }

  submitOtp() {
    this.isOtpSubmitting = true;
    var loginModel : LoginViewModel ={userName:this.username.value, password: this.password.value};
    this.auth
        .apiAuthValidateOtpPost$Json({body:loginModel})
        .subscribe(result =>{
          //this.oeeEventModel = result.body.result!;
          console.log(result);
          const loginResponse = result.result!;
          if(result.isSuccess && result.statusCode == 200)
          {
            console.log(loginResponse);
            this.tokenService.set(loginResponse);
            this.router.navigateByUrl('/');
          }else{
            this.toast.error(result.message);
          }

          //this.toast.error(result.body.message);
          console.log(loginResponse);
          this.isOtpSubmitting = false;
          // this._snackBar.error('Updated Successfully.');
        });
  }
}
