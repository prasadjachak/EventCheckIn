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

  loginForm = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    rememberMe: [false],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private tokenService: TokenService,
    private toast: ToastrService
  ) {}

  get username() {
    return this.loginForm.get('username')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  get rememberMe() {
    return this.loginForm.get('rememberMe')!;
  }

  login() {
    this.isSubmitting = true;
    var loginModel : LoginViewModel ={userName:this.username.value, password: this.password.value};
    this.auth
        .apiAuthLoginPost$Json$Response({body:loginModel})
        .subscribe(result =>{
          //this.oeeEventModel = result.body.result!;
          console.log(result);
          const loginResponse = result.body.result!;
          if(loginResponse != null)
          {
            this.tokenService.set(loginResponse);
            this.router.navigateByUrl('/');
          }

          this.toast.error(result.body.message);
          console.log(loginResponse);
          this.isSubmitting = false;
          // this._snackBar.error('Updated Successfully.');
        });


  }
}
