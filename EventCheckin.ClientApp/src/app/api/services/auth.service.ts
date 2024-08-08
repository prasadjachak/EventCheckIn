/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAuthConfirmEmailPost } from '../fn/auth/api-auth-confirm-email-post';
import { ApiAuthConfirmEmailPost$Params } from '../fn/auth/api-auth-confirm-email-post';
import { apiAuthForgotPasswordPost } from '../fn/auth/api-auth-forgot-password-post';
import { ApiAuthForgotPasswordPost$Params } from '../fn/auth/api-auth-forgot-password-post';
import { apiAuthGetOtpPost$Json } from '../fn/auth/api-auth-get-otp-post-json';
import { ApiAuthGetOtpPost$Json$Params } from '../fn/auth/api-auth-get-otp-post-json';
import { apiAuthGetOtpPost$Plain } from '../fn/auth/api-auth-get-otp-post-plain';
import { ApiAuthGetOtpPost$Plain$Params } from '../fn/auth/api-auth-get-otp-post-plain';
import { apiAuthLoginPost$Json } from '../fn/auth/api-auth-login-post-json';
import { ApiAuthLoginPost$Json$Params } from '../fn/auth/api-auth-login-post-json';
import { apiAuthLoginPost$Plain } from '../fn/auth/api-auth-login-post-plain';
import { ApiAuthLoginPost$Plain$Params } from '../fn/auth/api-auth-login-post-plain';
import { apiAuthLoginWith2FaPost } from '../fn/auth/api-auth-login-with-2-fa-post';
import { ApiAuthLoginWith2FaPost$Params } from '../fn/auth/api-auth-login-with-2-fa-post';
import { apiAuthLogoutGet } from '../fn/auth/api-auth-logout-get';
import { ApiAuthLogoutGet$Params } from '../fn/auth/api-auth-logout-get';
import { apiAuthMeGet$Json } from '../fn/auth/api-auth-me-get-json';
import { ApiAuthMeGet$Json$Params } from '../fn/auth/api-auth-me-get-json';
import { apiAuthMeGet$Plain } from '../fn/auth/api-auth-me-get-plain';
import { ApiAuthMeGet$Plain$Params } from '../fn/auth/api-auth-me-get-plain';
import { apiAuthRegisterPost } from '../fn/auth/api-auth-register-post';
import { ApiAuthRegisterPost$Params } from '../fn/auth/api-auth-register-post';
import { apiAuthResendVerificationEmailPost } from '../fn/auth/api-auth-resend-verification-email-post';
import { ApiAuthResendVerificationEmailPost$Params } from '../fn/auth/api-auth-resend-verification-email-post';
import { apiAuthResetPasswordPost } from '../fn/auth/api-auth-reset-password-post';
import { ApiAuthResetPasswordPost$Params } from '../fn/auth/api-auth-reset-password-post';
import { apiAuthValidateOtpPost$Json } from '../fn/auth/api-auth-validate-otp-post-json';
import { ApiAuthValidateOtpPost$Json$Params } from '../fn/auth/api-auth-validate-otp-post-json';
import { apiAuthValidateOtpPost$Plain } from '../fn/auth/api-auth-validate-otp-post-plain';
import { ApiAuthValidateOtpPost$Plain$Params } from '../fn/auth/api-auth-validate-otp-post-plain';
import { CustomApiResponse } from '../models/custom-api-response';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAuthConfirmEmailPost()` */
  static readonly ApiAuthConfirmEmailPostPath = '/api/Auth/ConfirmEmail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthConfirmEmailPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthConfirmEmailPost$Response(params?: ApiAuthConfirmEmailPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthConfirmEmailPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthConfirmEmailPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthConfirmEmailPost(params?: ApiAuthConfirmEmailPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthConfirmEmailPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAuthRegisterPost()` */
  static readonly ApiAuthRegisterPostPath = '/api/Auth/Register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthRegisterPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRegisterPost$Response(params?: ApiAuthRegisterPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthRegisterPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthRegisterPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRegisterPost(params?: ApiAuthRegisterPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthRegisterPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAuthLoginPost()` */
  static readonly ApiAuthLoginPostPath = '/api/Auth/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Plain$Response(params?: ApiAuthLoginPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAuthLoginPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Plain(params?: ApiAuthLoginPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAuthLoginPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLoginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Json$Response(params?: ApiAuthLoginPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAuthLoginPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthLoginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Json(params?: ApiAuthLoginPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAuthLoginPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiAuthGetOtpPost()` */
  static readonly ApiAuthGetOtpPostPath = '/api/Auth/GetOtp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthGetOtpPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthGetOtpPost$Plain$Response(params?: ApiAuthGetOtpPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAuthGetOtpPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthGetOtpPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthGetOtpPost$Plain(params?: ApiAuthGetOtpPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAuthGetOtpPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthGetOtpPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthGetOtpPost$Json$Response(params?: ApiAuthGetOtpPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAuthGetOtpPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthGetOtpPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthGetOtpPost$Json(params?: ApiAuthGetOtpPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAuthGetOtpPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiAuthValidateOtpPost()` */
  static readonly ApiAuthValidateOtpPostPath = '/api/Auth/ValidateOtp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthValidateOtpPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthValidateOtpPost$Plain$Response(params?: ApiAuthValidateOtpPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAuthValidateOtpPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthValidateOtpPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthValidateOtpPost$Plain(params?: ApiAuthValidateOtpPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAuthValidateOtpPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthValidateOtpPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthValidateOtpPost$Json$Response(params?: ApiAuthValidateOtpPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAuthValidateOtpPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthValidateOtpPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthValidateOtpPost$Json(params?: ApiAuthValidateOtpPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAuthValidateOtpPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiAuthLogoutGet()` */
  static readonly ApiAuthLogoutGetPath = '/api/Auth/Logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLogoutGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthLogoutGet$Response(params?: ApiAuthLogoutGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthLogoutGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthLogoutGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthLogoutGet(params?: ApiAuthLogoutGet$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthLogoutGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAuthLoginWith2FaPost()` */
  static readonly ApiAuthLoginWith2FaPostPath = '/api/Auth/LoginWith2fa';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLoginWith2FaPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginWith2FaPost$Response(params?: ApiAuthLoginWith2FaPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthLoginWith2FaPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthLoginWith2FaPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginWith2FaPost(params?: ApiAuthLoginWith2FaPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthLoginWith2FaPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAuthForgotPasswordPost()` */
  static readonly ApiAuthForgotPasswordPostPath = '/api/Auth/ForgotPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthForgotPasswordPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthForgotPasswordPost$Response(params?: ApiAuthForgotPasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthForgotPasswordPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthForgotPasswordPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthForgotPasswordPost(params?: ApiAuthForgotPasswordPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthForgotPasswordPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAuthResetPasswordPost()` */
  static readonly ApiAuthResetPasswordPostPath = '/api/Auth/ResetPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthResetPasswordPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthResetPasswordPost$Response(params?: ApiAuthResetPasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthResetPasswordPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthResetPasswordPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthResetPasswordPost(params?: ApiAuthResetPasswordPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthResetPasswordPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAuthResendVerificationEmailPost()` */
  static readonly ApiAuthResendVerificationEmailPostPath = '/api/Auth/ResendVerificationEmail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthResendVerificationEmailPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthResendVerificationEmailPost$Response(params?: ApiAuthResendVerificationEmailPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthResendVerificationEmailPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthResendVerificationEmailPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthResendVerificationEmailPost(params?: ApiAuthResendVerificationEmailPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthResendVerificationEmailPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAuthMeGet()` */
  static readonly ApiAuthMeGetPath = '/api/Auth/me';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthMeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthMeGet$Plain$Response(params?: ApiAuthMeGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAuthMeGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthMeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthMeGet$Plain(params?: ApiAuthMeGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAuthMeGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthMeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthMeGet$Json$Response(params?: ApiAuthMeGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAuthMeGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthMeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthMeGet$Json(params?: ApiAuthMeGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAuthMeGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

}
