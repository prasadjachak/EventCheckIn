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
import { apiUserDeleteUserIdDelete$Json } from '../fn/user/api-user-delete-user-id-delete-json';
import { ApiUserDeleteUserIdDelete$Json$Params } from '../fn/user/api-user-delete-user-id-delete-json';
import { apiUserDeleteUserIdDelete$Plain } from '../fn/user/api-user-delete-user-id-delete-plain';
import { ApiUserDeleteUserIdDelete$Plain$Params } from '../fn/user/api-user-delete-user-id-delete-plain';
import { apiUserGetUserIdGet$Json } from '../fn/user/api-user-get-user-id-get-json';
import { ApiUserGetUserIdGet$Json$Params } from '../fn/user/api-user-get-user-id-get-json';
import { apiUserGetUserIdGet$Plain } from '../fn/user/api-user-get-user-id-get-plain';
import { ApiUserGetUserIdGet$Plain$Params } from '../fn/user/api-user-get-user-id-get-plain';
import { apiUserListUserGet$Json } from '../fn/user/api-user-list-user-get-json';
import { ApiUserListUserGet$Json$Params } from '../fn/user/api-user-list-user-get-json';
import { apiUserListUserGet$Plain } from '../fn/user/api-user-list-user-get-plain';
import { ApiUserListUserGet$Plain$Params } from '../fn/user/api-user-list-user-get-plain';
import { apiUserMymenuGet$Json } from '../fn/user/api-user-mymenu-get-json';
import { ApiUserMymenuGet$Json$Params } from '../fn/user/api-user-mymenu-get-json';
import { apiUserMymenuGet$Plain } from '../fn/user/api-user-mymenu-get-plain';
import { ApiUserMymenuGet$Plain$Params } from '../fn/user/api-user-mymenu-get-plain';
import { apiUserUpdateUserIdPut$Json } from '../fn/user/api-user-update-user-id-put-json';
import { ApiUserUpdateUserIdPut$Json$Params } from '../fn/user/api-user-update-user-id-put-json';
import { apiUserUpdateUserIdPut$Plain } from '../fn/user/api-user-update-user-id-put-plain';
import { ApiUserUpdateUserIdPut$Plain$Params } from '../fn/user/api-user-update-user-id-put-plain';
import { CustomApiResponse } from '../models/custom-api-response';
import { IdentityUser } from '../models/identity-user';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserListUserGet()` */
  static readonly ApiUserListUserGetPath = '/api/User/ListUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserListUserGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserListUserGet$Plain$Response(params?: ApiUserListUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<IdentityUser>>> {
    return apiUserListUserGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserListUserGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserListUserGet$Plain(params?: ApiUserListUserGet$Plain$Params, context?: HttpContext): Observable<Array<IdentityUser>> {
    return this.apiUserListUserGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IdentityUser>>): Array<IdentityUser> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserListUserGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserListUserGet$Json$Response(params?: ApiUserListUserGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<IdentityUser>>> {
    return apiUserListUserGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserListUserGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserListUserGet$Json(params?: ApiUserListUserGet$Json$Params, context?: HttpContext): Observable<Array<IdentityUser>> {
    return this.apiUserListUserGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IdentityUser>>): Array<IdentityUser> => r.body)
    );
  }

  /** Path part for operation `apiUserGetUserIdGet()` */
  static readonly ApiUserGetUserIdGetPath = '/api/User/GetUser/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserIdGet$Plain$Response(params: ApiUserGetUserIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserGetUserIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserIdGet$Plain(params: ApiUserGetUserIdGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserGetUserIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetUserIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserIdGet$Json$Response(params: ApiUserGetUserIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserGetUserIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetUserIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserIdGet$Json(params: ApiUserGetUserIdGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserGetUserIdGet$Json$Response(params, context).pipe(
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

  /** Path part for operation `apiUserUpdateUserIdPut()` */
  static readonly ApiUserUpdateUserIdPutPath = '/api/User/UpdateUser/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateUserIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserIdPut$Plain$Response(params: ApiUserUpdateUserIdPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserUpdateUserIdPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUpdateUserIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserIdPut$Plain(params: ApiUserUpdateUserIdPut$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserUpdateUserIdPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateUserIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserIdPut$Json$Response(params: ApiUserUpdateUserIdPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserUpdateUserIdPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUpdateUserIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserIdPut$Json(params: ApiUserUpdateUserIdPut$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserUpdateUserIdPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiUserDeleteUserIdDelete()` */
  static readonly ApiUserDeleteUserIdDeletePath = '/api/User/DeleteUser/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDeleteUserIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDeleteUserIdDelete$Plain$Response(params: ApiUserDeleteUserIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserDeleteUserIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserDeleteUserIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDeleteUserIdDelete$Plain(params: ApiUserDeleteUserIdDelete$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserDeleteUserIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDeleteUserIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDeleteUserIdDelete$Json$Response(params: ApiUserDeleteUserIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiUserDeleteUserIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserDeleteUserIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDeleteUserIdDelete$Json(params: ApiUserDeleteUserIdDelete$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiUserDeleteUserIdDelete$Json$Response(params, context).pipe(
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
