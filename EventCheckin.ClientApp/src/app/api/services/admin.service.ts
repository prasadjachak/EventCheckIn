/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAdminAddMemberUserPost$Json } from '../fn/admin/api-admin-add-member-user-post-json';
import { ApiAdminAddMemberUserPost$Json$Params } from '../fn/admin/api-admin-add-member-user-post-json';
import { apiAdminAddMemberUserPost$Plain } from '../fn/admin/api-admin-add-member-user-post-plain';
import { ApiAdminAddMemberUserPost$Plain$Params } from '../fn/admin/api-admin-add-member-user-post-plain';
import { apiAdminDeleteUserDelete$Json } from '../fn/admin/api-admin-delete-user-delete-json';
import { ApiAdminDeleteUserDelete$Json$Params } from '../fn/admin/api-admin-delete-user-delete-json';
import { apiAdminDeleteUserDelete$Plain } from '../fn/admin/api-admin-delete-user-delete-plain';
import { ApiAdminDeleteUserDelete$Plain$Params } from '../fn/admin/api-admin-delete-user-delete-plain';
import { apiAdminGetUserGet$Json } from '../fn/admin/api-admin-get-user-get-json';
import { ApiAdminGetUserGet$Json$Params } from '../fn/admin/api-admin-get-user-get-json';
import { apiAdminGetUserGet$Plain } from '../fn/admin/api-admin-get-user-get-plain';
import { ApiAdminGetUserGet$Plain$Params } from '../fn/admin/api-admin-get-user-get-plain';
import { apiAdminListUserPost$Json } from '../fn/admin/api-admin-list-user-post-json';
import { ApiAdminListUserPost$Json$Params } from '../fn/admin/api-admin-list-user-post-json';
import { apiAdminListUserPost$Plain } from '../fn/admin/api-admin-list-user-post-plain';
import { ApiAdminListUserPost$Plain$Params } from '../fn/admin/api-admin-list-user-post-plain';
import { apiAdminUpdateUserPut$Json } from '../fn/admin/api-admin-update-user-put-json';
import { ApiAdminUpdateUserPut$Json$Params } from '../fn/admin/api-admin-update-user-put-json';
import { apiAdminUpdateUserPut$Plain } from '../fn/admin/api-admin-update-user-put-plain';
import { ApiAdminUpdateUserPut$Plain$Params } from '../fn/admin/api-admin-update-user-put-plain';
import { CustomApiResponse } from '../models/custom-api-response';

@Injectable({ providedIn: 'root' })
export class AdminService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAdminListUserPost()` */
  static readonly ApiAdminListUserPostPath = '/api/Admin/ListUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminListUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminListUserPost$Plain$Response(params?: ApiAdminListUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAdminListUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminListUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminListUserPost$Plain(params?: ApiAdminListUserPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAdminListUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminListUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminListUserPost$Json$Response(params?: ApiAdminListUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAdminListUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminListUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminListUserPost$Json(params?: ApiAdminListUserPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAdminListUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiAdminGetUserGet()` */
  static readonly ApiAdminGetUserGetPath = '/api/Admin/GetUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminGetUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminGetUserGet$Plain$Response(params?: ApiAdminGetUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAdminGetUserGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminGetUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminGetUserGet$Plain(params?: ApiAdminGetUserGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAdminGetUserGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminGetUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminGetUserGet$Json$Response(params?: ApiAdminGetUserGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAdminGetUserGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminGetUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminGetUserGet$Json(params?: ApiAdminGetUserGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAdminGetUserGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiAdminAddMemberUserPost()` */
  static readonly ApiAdminAddMemberUserPostPath = '/api/Admin/AddMemberUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminAddMemberUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminAddMemberUserPost$Plain$Response(params?: ApiAdminAddMemberUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAdminAddMemberUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminAddMemberUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminAddMemberUserPost$Plain(params?: ApiAdminAddMemberUserPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAdminAddMemberUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminAddMemberUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminAddMemberUserPost$Json$Response(params?: ApiAdminAddMemberUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAdminAddMemberUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminAddMemberUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminAddMemberUserPost$Json(params?: ApiAdminAddMemberUserPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAdminAddMemberUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiAdminUpdateUserPut()` */
  static readonly ApiAdminUpdateUserPutPath = '/api/Admin/UpdateUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminUpdateUserPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminUpdateUserPut$Plain$Response(params?: ApiAdminUpdateUserPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAdminUpdateUserPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminUpdateUserPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminUpdateUserPut$Plain(params?: ApiAdminUpdateUserPut$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAdminUpdateUserPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminUpdateUserPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminUpdateUserPut$Json$Response(params?: ApiAdminUpdateUserPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAdminUpdateUserPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminUpdateUserPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminUpdateUserPut$Json(params?: ApiAdminUpdateUserPut$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAdminUpdateUserPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiAdminDeleteUserDelete()` */
  static readonly ApiAdminDeleteUserDeletePath = '/api/Admin/DeleteUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminDeleteUserDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminDeleteUserDelete$Plain$Response(params?: ApiAdminDeleteUserDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAdminDeleteUserDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminDeleteUserDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminDeleteUserDelete$Plain(params?: ApiAdminDeleteUserDelete$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAdminDeleteUserDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminDeleteUserDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminDeleteUserDelete$Json$Response(params?: ApiAdminDeleteUserDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiAdminDeleteUserDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminDeleteUserDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminDeleteUserDelete$Json(params?: ApiAdminDeleteUserDelete$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiAdminDeleteUserDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

}
