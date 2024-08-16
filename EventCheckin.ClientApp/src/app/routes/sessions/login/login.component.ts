import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/api/services/auth.service';
import { LoginViewModel } from 'app/api/models';
import { TokenService } from '@core/authentication/token.service';
import { ToastrService } from 'ngx-toastr';
import { getFingerprint } from '@thumbmarkjs/thumbmarkjs'
import { LocalStorageService } from '@shared/services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {
  onlyNumbers = /^\d+$/;
  isSubmitting = false;
  isOtpSubmitting = false;
  otpForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    password: ['', []],
  });

  otp:string;
  deviceId ="";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private tokenService: TokenService,
    private toast: ToastrService,
    private store: LocalStorageService,
  ) {

    getFingerprint().then(
      function(fp) {
          console.log(fp);
      }
    );

  console.log();
    var deviceId = this.store.get("deviceid");
    if(deviceId != null){
      this.fingerPrintLogin(deviceId);
    }
  }

  get username() {
    return this.otpForm.get('username')!;
  }

  async getDeviceId() {
    var d = await getFingerprint().then(
      function(fp) {
          return fp;
      }
    );
    console.log(d);
    return d;
  }

  get password() {
    return this.otpForm.get('password')!;
  }

  get rememberMe() {
    return this.otpForm.get('rememberMe')!;
  }

  async getOtp() {
    var deviceId = await this.getDeviceId();
    console.log(deviceId);
    this.isSubmitting = true;
    var loginModel : LoginViewModel ={userName:this.username.value,
      password: this.password.value,
      deviceId :deviceId.toString()
    };
    this.auth
        .apiAuthGetOtpPost$Json$Response({body:loginModel})
        .subscribe(result =>{
          //this.oeeEventModel = result.body.result!;
          console.log(result);
          const loginResponse = result.body.result!;
          this.otp = result.body.result!;

          if(result.body.isSuccess)
            this.toast.error(result.body.result!);
          else
            this.toast.error(result.body.message!);
          console.log(loginResponse);
          this.isSubmitting = false;
          // this._snackBar.error('Updated Successfully.');
        });
  }

  async submitOtp() {
    this.isOtpSubmitting = true;
    var deviceId = await this.getDeviceId();
    this.store.set("deviceid",deviceId);
    console.log(deviceId);
    var loginModel : LoginViewModel ={userName:this.username.value,
      password: this.password.value,
      deviceId :deviceId.toString()
    };
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

  async fingerPrintLogin(deviceId) {

    this.isOtpSubmitting = true;
    var loginModel : LoginViewModel ={
      userName:"t",
      password: "t",
      deviceId :deviceId.toString()
    };

    this.auth
        .apiAuthFingerPrintLoginPost$Json({body:loginModel})
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
