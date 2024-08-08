/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUserAddUserPost$Json } from '../fn/user/api-user-add-user-post-json';
import { ApiUserAddUserPost$Json$Params } from '../fn/user/api-user-add-user-post-json';
import { apiUserAddUserPost$Plain } from '../fn/user/api-user-add-user-post-plain';
import { ApiUserAddUserPost$Plain$Params } from '../fn/user/api-user-add-user-post-plain';
import { apiUserDeleteUserDelete$Json } from '../fn/user/api-user-delete-user-delete-json';
import { ApiUserDeleteUserDelete$Json$Params } from '../fn/user/api-user-delete-user-delete-json';
import { apiUserDeleteUserDelete$Plain } from '../fn/user/api-user-delete-user-delete-plain';
import { ApiUserDeleteUserDelete$Plain$Params } from '../fn/user/api-user-delete-user-delete-plain';
import { apiUserGetUserGet$Json } from '../fn/user/api-user-get-user-get-json';
import { ApiUserGetUserGet$Json$Params } from '../fn/user/api-user-get-user-get-json';
import { apiUserGetUserGet$Plain } from '../fn/user/api-user-get-user-get-plain';
import { ApiUserGetUserGet$Plain$Params } from '../fn/user/api-user-get-user-get-plain';
import { apiUserListUserPost$Json } from '../fn/user/api-user-list-user-post-json';
import { ApiUserListUserPost$Json$Params } from '../fn/user/api-user-list-user-post-json';
import { apiUserListUserPost$Plain } from '../fn/user/api-user-list-user-post-plain';
import { ApiUserListUserPost$Plain$Params } from '../fn/user/api-user-list-user-post-plain';
import { apiUserMymenuGet$Json } from '../fn/user/api-user-mymenu-get-json';
import { ApiUserMymenuGet$Json$Params } from '../fn/user/api-user-mymenu-get-json';
import { apiUserMymenuGet$Plain } from '../fn/user/api-user-mymenu-get-plain';
import { ApiUserMymenuGet$Plain$Params } from '../fn/user/api-user-mymenu-get-plain';
import { apiUserUpdateUserPut$Json } from '../fn/user/api-user-update-user-put-json';
import { ApiUserUpdateUserPut$Json$Params } from '../fn/user/api-user-update-user-put-json';
import { apiUserUpdateUserPut$Plain } from '../fn/user/api-user-update-user-put-plain';
import { ApiUserUpdateUserPut$Plain$Params } from '../fn/user/api-user-update-user-put-plain';
import { CustomApiResponse } from '../models/custom-api-response';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserListUserPost()` */
  static readonly ApiUserListUserPostPath = '/api/User/ListUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserListUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserListUserPost$Plain$Response(params?: ApiUserListUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserListUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserListUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserListUserPost$Plain(params?: ApiUserListUserPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserListUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserListUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserListUserPost$Json$Response(params?: ApiUserListUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserListUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserListUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserListUserPost$Json(params?: ApiUserListUserPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserListUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiUserGetUserGet()` */
  static readonly ApiUserGetUserGetPath = '/api/User/GetUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserGet$Plain$Response(params?: ApiUserGetUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserGetUserGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserGet$Plain(params?: ApiUserGetUserGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserGetUserGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserGet$Json$Response(params?: ApiUserGetUserGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserGetUserGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserGet$Json(params?: ApiUserGetUserGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserGetUserGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiUserAddUserPost()` */
  static readonly ApiUserAddUserPostPath = '/api/User/AddUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAddUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAddUserPost$Plain$Response(params?: ApiUserAddUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserAddUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAddUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAddUserPost$Plain(params?: ApiUserAddUserPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserAddUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAddUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAddUserPost$Json$Response(params?: ApiUserAddUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserAddUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAddUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAddUserPost$Json(params?: ApiUserAddUserPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserAddUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiUserUpdateUserPut()` */
  static readonly ApiUserUpdateUserPutPath = '/api/User/UpdateUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateUserPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserPut$Plain$Response(params?: ApiUserUpdateUserPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserUpdateUserPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUpdateUserPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserPut$Plain(params?: ApiUserUpdateUserPut$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserUpdateUserPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateUserPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserPut$Json$Response(params?: ApiUserUpdateUserPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserUpdateUserPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUpdateUserPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserPut$Json(params?: ApiUserUpdateUserPut$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserUpdateUserPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiUserDeleteUserDelete()` */
  static readonly ApiUserDeleteUserDeletePath = '/api/User/DeleteUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDeleteUserDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDeleteUserDelete$Plain$Response(params?: ApiUserDeleteUserDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserDeleteUserDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserDeleteUserDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDeleteUserDelete$Plain(params?: ApiUserDeleteUserDelete$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserDeleteUserDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDeleteUserDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDeleteUserDelete$Json$Response(params?: ApiUserDeleteUserDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserDeleteUserDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserDeleteUserDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDeleteUserDelete$Json(params?: ApiUserDeleteUserDelete$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserDeleteUserDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiUserMymenuGet()` */
  static readonly ApiUserMymenuGetPath = '/api/User/mymenu';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMymenuGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMymenuGet$Plain$Response(params?: ApiUserMymenuGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserMymenuGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserMymenuGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMymenuGet$Plain(params?: ApiUserMymenuGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserMymenuGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMymenuGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMymenuGet$Json$Response(params?: ApiUserMymenuGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserMymenuGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserMymenuGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMymenuGet$Json(params?: ApiUserMymenuGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserMymenuGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

}
