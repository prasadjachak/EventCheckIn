/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiSecurityUserAddSecurityUserPost$Json } from '../fn/security-user/api-security-user-add-security-user-post-json';
import { ApiSecurityUserAddSecurityUserPost$Json$Params } from '../fn/security-user/api-security-user-add-security-user-post-json';
import { apiSecurityUserAddSecurityUserPost$Plain } from '../fn/security-user/api-security-user-add-security-user-post-plain';
import { ApiSecurityUserAddSecurityUserPost$Plain$Params } from '../fn/security-user/api-security-user-add-security-user-post-plain';
import { apiSecurityUserDeleteUserDelete$Json } from '../fn/security-user/api-security-user-delete-user-delete-json';
import { ApiSecurityUserDeleteUserDelete$Json$Params } from '../fn/security-user/api-security-user-delete-user-delete-json';
import { apiSecurityUserDeleteUserDelete$Plain } from '../fn/security-user/api-security-user-delete-user-delete-plain';
import { ApiSecurityUserDeleteUserDelete$Plain$Params } from '../fn/security-user/api-security-user-delete-user-delete-plain';
import { apiSecurityUserGetUserGet$Json } from '../fn/security-user/api-security-user-get-user-get-json';
import { ApiSecurityUserGetUserGet$Json$Params } from '../fn/security-user/api-security-user-get-user-get-json';
import { apiSecurityUserGetUserGet$Plain } from '../fn/security-user/api-security-user-get-user-get-plain';
import { ApiSecurityUserGetUserGet$Plain$Params } from '../fn/security-user/api-security-user-get-user-get-plain';
import { apiSecurityUserListUserPost$Json } from '../fn/security-user/api-security-user-list-user-post-json';
import { ApiSecurityUserListUserPost$Json$Params } from '../fn/security-user/api-security-user-list-user-post-json';
import { apiSecurityUserListUserPost$Plain } from '../fn/security-user/api-security-user-list-user-post-plain';
import { ApiSecurityUserListUserPost$Plain$Params } from '../fn/security-user/api-security-user-list-user-post-plain';
import { apiSecurityUserUpdateUserPut$Json } from '../fn/security-user/api-security-user-update-user-put-json';
import { ApiSecurityUserUpdateUserPut$Json$Params } from '../fn/security-user/api-security-user-update-user-put-json';
import { apiSecurityUserUpdateUserPut$Plain } from '../fn/security-user/api-security-user-update-user-put-plain';
import { ApiSecurityUserUpdateUserPut$Plain$Params } from '../fn/security-user/api-security-user-update-user-put-plain';
import { CustomApiResponse } from '../models/custom-api-response';

@Injectable({ providedIn: 'root' })
export class SecurityUserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiSecurityUserListUserPost()` */
  static readonly ApiSecurityUserListUserPostPath = '/api/SecurityUser/ListUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSecurityUserListUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityUserListUserPost$Plain$Response(params?: ApiSecurityUserListUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiSecurityUserListUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSecurityUserListUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityUserListUserPost$Plain(params?: ApiSecurityUserListUserPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiSecurityUserListUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSecurityUserListUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityUserListUserPost$Json$Response(params?: ApiSecurityUserListUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiSecurityUserListUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSecurityUserListUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityUserListUserPost$Json(params?: ApiSecurityUserListUserPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiSecurityUserListUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiSecurityUserGetUserGet()` */
  static readonly ApiSecurityUserGetUserGetPath = '/api/SecurityUser/GetUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSecurityUserGetUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSecurityUserGetUserGet$Plain$Response(params?: ApiSecurityUserGetUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiSecurityUserGetUserGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSecurityUserGetUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSecurityUserGetUserGet$Plain(params?: ApiSecurityUserGetUserGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiSecurityUserGetUserGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSecurityUserGetUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSecurityUserGetUserGet$Json$Response(params?: ApiSecurityUserGetUserGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiSecurityUserGetUserGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSecurityUserGetUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSecurityUserGetUserGet$Json(params?: ApiSecurityUserGetUserGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiSecurityUserGetUserGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiSecurityUserAddSecurityUserPost()` */
  static readonly ApiSecurityUserAddSecurityUserPostPath = '/api/SecurityUser/AddSecurityUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSecurityUserAddSecurityUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityUserAddSecurityUserPost$Plain$Response(params?: ApiSecurityUserAddSecurityUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiSecurityUserAddSecurityUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSecurityUserAddSecurityUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityUserAddSecurityUserPost$Plain(params?: ApiSecurityUserAddSecurityUserPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiSecurityUserAddSecurityUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSecurityUserAddSecurityUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityUserAddSecurityUserPost$Json$Response(params?: ApiSecurityUserAddSecurityUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiSecurityUserAddSecurityUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSecurityUserAddSecurityUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityUserAddSecurityUserPost$Json(params?: ApiSecurityUserAddSecurityUserPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiSecurityUserAddSecurityUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiSecurityUserUpdateUserPut()` */
  static readonly ApiSecurityUserUpdateUserPutPath = '/api/SecurityUser/UpdateUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSecurityUserUpdateUserPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityUserUpdateUserPut$Plain$Response(params?: ApiSecurityUserUpdateUserPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiSecurityUserUpdateUserPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSecurityUserUpdateUserPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityUserUpdateUserPut$Plain(params?: ApiSecurityUserUpdateUserPut$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiSecurityUserUpdateUserPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSecurityUserUpdateUserPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityUserUpdateUserPut$Json$Response(params?: ApiSecurityUserUpdateUserPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiSecurityUserUpdateUserPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSecurityUserUpdateUserPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityUserUpdateUserPut$Json(params?: ApiSecurityUserUpdateUserPut$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiSecurityUserUpdateUserPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiSecurityUserDeleteUserDelete()` */
  static readonly ApiSecurityUserDeleteUserDeletePath = '/api/SecurityUser/DeleteUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSecurityUserDeleteUserDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSecurityUserDeleteUserDelete$Plain$Response(params?: ApiSecurityUserDeleteUserDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiSecurityUserDeleteUserDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSecurityUserDeleteUserDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSecurityUserDeleteUserDelete$Plain(params?: ApiSecurityUserDeleteUserDelete$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiSecurityUserDeleteUserDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSecurityUserDeleteUserDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSecurityUserDeleteUserDelete$Json$Response(params?: ApiSecurityUserDeleteUserDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiSecurityUserDeleteUserDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSecurityUserDeleteUserDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSecurityUserDeleteUserDelete$Json(params?: ApiSecurityUserDeleteUserDelete$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiSecurityUserDeleteUserDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

}
