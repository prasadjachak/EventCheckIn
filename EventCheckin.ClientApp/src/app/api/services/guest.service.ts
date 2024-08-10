/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiGuestAddGuestUserPost$Json } from '../fn/guest/api-guest-add-guest-user-post-json';
import { ApiGuestAddGuestUserPost$Json$Params } from '../fn/guest/api-guest-add-guest-user-post-json';
import { apiGuestAddGuestUserPost$Plain } from '../fn/guest/api-guest-add-guest-user-post-plain';
import { ApiGuestAddGuestUserPost$Plain$Params } from '../fn/guest/api-guest-add-guest-user-post-plain';
import { apiGuestDeleteUserDelete$Json } from '../fn/guest/api-guest-delete-user-delete-json';
import { ApiGuestDeleteUserDelete$Json$Params } from '../fn/guest/api-guest-delete-user-delete-json';
import { apiGuestDeleteUserDelete$Plain } from '../fn/guest/api-guest-delete-user-delete-plain';
import { ApiGuestDeleteUserDelete$Plain$Params } from '../fn/guest/api-guest-delete-user-delete-plain';
import { apiGuestGetUserGet$Json } from '../fn/guest/api-guest-get-user-get-json';
import { ApiGuestGetUserGet$Json$Params } from '../fn/guest/api-guest-get-user-get-json';
import { apiGuestGetUserGet$Plain } from '../fn/guest/api-guest-get-user-get-plain';
import { ApiGuestGetUserGet$Plain$Params } from '../fn/guest/api-guest-get-user-get-plain';
import { apiGuestListUserPost$Json } from '../fn/guest/api-guest-list-user-post-json';
import { ApiGuestListUserPost$Json$Params } from '../fn/guest/api-guest-list-user-post-json';
import { apiGuestListUserPost$Plain } from '../fn/guest/api-guest-list-user-post-plain';
import { ApiGuestListUserPost$Plain$Params } from '../fn/guest/api-guest-list-user-post-plain';
import { apiGuestMymenuGet$Json } from '../fn/guest/api-guest-mymenu-get-json';
import { ApiGuestMymenuGet$Json$Params } from '../fn/guest/api-guest-mymenu-get-json';
import { apiGuestMymenuGet$Plain } from '../fn/guest/api-guest-mymenu-get-plain';
import { ApiGuestMymenuGet$Plain$Params } from '../fn/guest/api-guest-mymenu-get-plain';
import { apiGuestUpdateUserPut$Json } from '../fn/guest/api-guest-update-user-put-json';
import { ApiGuestUpdateUserPut$Json$Params } from '../fn/guest/api-guest-update-user-put-json';
import { apiGuestUpdateUserPut$Plain } from '../fn/guest/api-guest-update-user-put-plain';
import { ApiGuestUpdateUserPut$Plain$Params } from '../fn/guest/api-guest-update-user-put-plain';
import { CustomApiResponse } from '../models/custom-api-response';

@Injectable({ providedIn: 'root' })
export class GuestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiGuestListUserPost()` */
  static readonly ApiGuestListUserPostPath = '/api/Guest/ListUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGuestListUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGuestListUserPost$Plain$Response(params?: ApiGuestListUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiGuestListUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGuestListUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGuestListUserPost$Plain(params?: ApiGuestListUserPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiGuestListUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGuestListUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGuestListUserPost$Json$Response(params?: ApiGuestListUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiGuestListUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGuestListUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGuestListUserPost$Json(params?: ApiGuestListUserPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiGuestListUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiGuestGetUserGet()` */
  static readonly ApiGuestGetUserGetPath = '/api/Guest/GetUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGuestGetUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGuestGetUserGet$Plain$Response(params?: ApiGuestGetUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiGuestGetUserGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGuestGetUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGuestGetUserGet$Plain(params?: ApiGuestGetUserGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiGuestGetUserGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGuestGetUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGuestGetUserGet$Json$Response(params?: ApiGuestGetUserGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiGuestGetUserGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGuestGetUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGuestGetUserGet$Json(params?: ApiGuestGetUserGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiGuestGetUserGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiGuestAddGuestUserPost()` */
  static readonly ApiGuestAddGuestUserPostPath = '/api/Guest/AddGuestUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGuestAddGuestUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGuestAddGuestUserPost$Plain$Response(params?: ApiGuestAddGuestUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiGuestAddGuestUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGuestAddGuestUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGuestAddGuestUserPost$Plain(params?: ApiGuestAddGuestUserPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiGuestAddGuestUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGuestAddGuestUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGuestAddGuestUserPost$Json$Response(params?: ApiGuestAddGuestUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiGuestAddGuestUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGuestAddGuestUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGuestAddGuestUserPost$Json(params?: ApiGuestAddGuestUserPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiGuestAddGuestUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiGuestUpdateUserPut()` */
  static readonly ApiGuestUpdateUserPutPath = '/api/Guest/UpdateUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGuestUpdateUserPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGuestUpdateUserPut$Plain$Response(params?: ApiGuestUpdateUserPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiGuestUpdateUserPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGuestUpdateUserPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGuestUpdateUserPut$Plain(params?: ApiGuestUpdateUserPut$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiGuestUpdateUserPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGuestUpdateUserPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGuestUpdateUserPut$Json$Response(params?: ApiGuestUpdateUserPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiGuestUpdateUserPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGuestUpdateUserPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGuestUpdateUserPut$Json(params?: ApiGuestUpdateUserPut$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiGuestUpdateUserPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiGuestDeleteUserDelete()` */
  static readonly ApiGuestDeleteUserDeletePath = '/api/Guest/DeleteUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGuestDeleteUserDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGuestDeleteUserDelete$Plain$Response(params?: ApiGuestDeleteUserDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiGuestDeleteUserDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGuestDeleteUserDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGuestDeleteUserDelete$Plain(params?: ApiGuestDeleteUserDelete$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiGuestDeleteUserDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGuestDeleteUserDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGuestDeleteUserDelete$Json$Response(params?: ApiGuestDeleteUserDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiGuestDeleteUserDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGuestDeleteUserDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGuestDeleteUserDelete$Json(params?: ApiGuestDeleteUserDelete$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiGuestDeleteUserDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiGuestMymenuGet()` */
  static readonly ApiGuestMymenuGetPath = '/api/Guest/mymenu';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGuestMymenuGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGuestMymenuGet$Plain$Response(params?: ApiGuestMymenuGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiGuestMymenuGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGuestMymenuGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGuestMymenuGet$Plain(params?: ApiGuestMymenuGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiGuestMymenuGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGuestMymenuGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGuestMymenuGet$Json$Response(params?: ApiGuestMymenuGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiGuestMymenuGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGuestMymenuGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGuestMymenuGet$Json(params?: ApiGuestMymenuGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiGuestMymenuGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

}
