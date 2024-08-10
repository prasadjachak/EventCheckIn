/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiMemberAddMemberUserPost$Json } from '../fn/member/api-member-add-member-user-post-json';
import { ApiMemberAddMemberUserPost$Json$Params } from '../fn/member/api-member-add-member-user-post-json';
import { apiMemberAddMemberUserPost$Plain } from '../fn/member/api-member-add-member-user-post-plain';
import { ApiMemberAddMemberUserPost$Plain$Params } from '../fn/member/api-member-add-member-user-post-plain';
import { apiMemberDeleteUserDelete$Json } from '../fn/member/api-member-delete-user-delete-json';
import { ApiMemberDeleteUserDelete$Json$Params } from '../fn/member/api-member-delete-user-delete-json';
import { apiMemberDeleteUserDelete$Plain } from '../fn/member/api-member-delete-user-delete-plain';
import { ApiMemberDeleteUserDelete$Plain$Params } from '../fn/member/api-member-delete-user-delete-plain';
import { apiMemberGetUserGet$Json } from '../fn/member/api-member-get-user-get-json';
import { ApiMemberGetUserGet$Json$Params } from '../fn/member/api-member-get-user-get-json';
import { apiMemberGetUserGet$Plain } from '../fn/member/api-member-get-user-get-plain';
import { ApiMemberGetUserGet$Plain$Params } from '../fn/member/api-member-get-user-get-plain';
import { apiMemberListUserPost$Json } from '../fn/member/api-member-list-user-post-json';
import { ApiMemberListUserPost$Json$Params } from '../fn/member/api-member-list-user-post-json';
import { apiMemberListUserPost$Plain } from '../fn/member/api-member-list-user-post-plain';
import { ApiMemberListUserPost$Plain$Params } from '../fn/member/api-member-list-user-post-plain';
import { apiMemberUpdateUserPut$Json } from '../fn/member/api-member-update-user-put-json';
import { ApiMemberUpdateUserPut$Json$Params } from '../fn/member/api-member-update-user-put-json';
import { apiMemberUpdateUserPut$Plain } from '../fn/member/api-member-update-user-put-plain';
import { ApiMemberUpdateUserPut$Plain$Params } from '../fn/member/api-member-update-user-put-plain';
import { CustomApiResponse } from '../models/custom-api-response';

@Injectable({ providedIn: 'root' })
export class MemberService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiMemberListUserPost()` */
  static readonly ApiMemberListUserPostPath = '/api/Member/ListUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberListUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberListUserPost$Plain$Response(params?: ApiMemberListUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiMemberListUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMemberListUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberListUserPost$Plain(params?: ApiMemberListUserPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiMemberListUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberListUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberListUserPost$Json$Response(params?: ApiMemberListUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiMemberListUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMemberListUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberListUserPost$Json(params?: ApiMemberListUserPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiMemberListUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiMemberGetUserGet()` */
  static readonly ApiMemberGetUserGetPath = '/api/Member/GetUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberGetUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberGetUserGet$Plain$Response(params?: ApiMemberGetUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiMemberGetUserGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMemberGetUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberGetUserGet$Plain(params?: ApiMemberGetUserGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiMemberGetUserGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberGetUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberGetUserGet$Json$Response(params?: ApiMemberGetUserGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiMemberGetUserGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMemberGetUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberGetUserGet$Json(params?: ApiMemberGetUserGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiMemberGetUserGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiMemberAddMemberUserPost()` */
  static readonly ApiMemberAddMemberUserPostPath = '/api/Member/AddMemberUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberAddMemberUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberAddMemberUserPost$Plain$Response(params?: ApiMemberAddMemberUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiMemberAddMemberUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMemberAddMemberUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberAddMemberUserPost$Plain(params?: ApiMemberAddMemberUserPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiMemberAddMemberUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberAddMemberUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberAddMemberUserPost$Json$Response(params?: ApiMemberAddMemberUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiMemberAddMemberUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMemberAddMemberUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberAddMemberUserPost$Json(params?: ApiMemberAddMemberUserPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiMemberAddMemberUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiMemberUpdateUserPut()` */
  static readonly ApiMemberUpdateUserPutPath = '/api/Member/UpdateUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberUpdateUserPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberUpdateUserPut$Plain$Response(params?: ApiMemberUpdateUserPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiMemberUpdateUserPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMemberUpdateUserPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberUpdateUserPut$Plain(params?: ApiMemberUpdateUserPut$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiMemberUpdateUserPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberUpdateUserPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberUpdateUserPut$Json$Response(params?: ApiMemberUpdateUserPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiMemberUpdateUserPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMemberUpdateUserPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberUpdateUserPut$Json(params?: ApiMemberUpdateUserPut$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiMemberUpdateUserPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiMemberDeleteUserDelete()` */
  static readonly ApiMemberDeleteUserDeletePath = '/api/Member/DeleteUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberDeleteUserDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberDeleteUserDelete$Plain$Response(params?: ApiMemberDeleteUserDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiMemberDeleteUserDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMemberDeleteUserDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberDeleteUserDelete$Plain(params?: ApiMemberDeleteUserDelete$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiMemberDeleteUserDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberDeleteUserDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberDeleteUserDelete$Json$Response(params?: ApiMemberDeleteUserDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiMemberDeleteUserDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMemberDeleteUserDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberDeleteUserDelete$Json(params?: ApiMemberDeleteUserDelete$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiMemberDeleteUserDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

}
