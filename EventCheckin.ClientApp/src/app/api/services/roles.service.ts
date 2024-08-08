/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiRolesAddRolePost$Json } from '../fn/roles/api-roles-add-role-post-json';
import { ApiRolesAddRolePost$Json$Params } from '../fn/roles/api-roles-add-role-post-json';
import { apiRolesAddRolePost$Plain } from '../fn/roles/api-roles-add-role-post-plain';
import { ApiRolesAddRolePost$Plain$Params } from '../fn/roles/api-roles-add-role-post-plain';
import { apiRolesDeleteRoleDelete$Json } from '../fn/roles/api-roles-delete-role-delete-json';
import { ApiRolesDeleteRoleDelete$Json$Params } from '../fn/roles/api-roles-delete-role-delete-json';
import { apiRolesDeleteRoleDelete$Plain } from '../fn/roles/api-roles-delete-role-delete-plain';
import { ApiRolesDeleteRoleDelete$Plain$Params } from '../fn/roles/api-roles-delete-role-delete-plain';
import { apiRolesListRoleGet$Json } from '../fn/roles/api-roles-list-role-get-json';
import { ApiRolesListRoleGet$Json$Params } from '../fn/roles/api-roles-list-role-get-json';
import { apiRolesListRoleGet$Plain } from '../fn/roles/api-roles-list-role-get-plain';
import { ApiRolesListRoleGet$Plain$Params } from '../fn/roles/api-roles-list-role-get-plain';
import { apiRolesUpdateRolePut$Json } from '../fn/roles/api-roles-update-role-put-json';
import { ApiRolesUpdateRolePut$Json$Params } from '../fn/roles/api-roles-update-role-put-json';
import { apiRolesUpdateRolePut$Plain } from '../fn/roles/api-roles-update-role-put-plain';
import { ApiRolesUpdateRolePut$Plain$Params } from '../fn/roles/api-roles-update-role-put-plain';
import { CustomApiResponse } from '../models/custom-api-response';

@Injectable({ providedIn: 'root' })
export class RolesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiRolesListRoleGet()` */
  static readonly ApiRolesListRoleGetPath = '/api/Roles/ListRole';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesListRoleGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesListRoleGet$Plain$Response(params?: ApiRolesListRoleGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiRolesListRoleGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesListRoleGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesListRoleGet$Plain(params?: ApiRolesListRoleGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiRolesListRoleGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesListRoleGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesListRoleGet$Json$Response(params?: ApiRolesListRoleGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiRolesListRoleGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesListRoleGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesListRoleGet$Json(params?: ApiRolesListRoleGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiRolesListRoleGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiRolesAddRolePost()` */
  static readonly ApiRolesAddRolePostPath = '/api/Roles/AddRole';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesAddRolePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesAddRolePost$Plain$Response(params?: ApiRolesAddRolePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiRolesAddRolePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesAddRolePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesAddRolePost$Plain(params?: ApiRolesAddRolePost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiRolesAddRolePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesAddRolePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesAddRolePost$Json$Response(params?: ApiRolesAddRolePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiRolesAddRolePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesAddRolePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesAddRolePost$Json(params?: ApiRolesAddRolePost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiRolesAddRolePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiRolesUpdateRolePut()` */
  static readonly ApiRolesUpdateRolePutPath = '/api/Roles/UpdateRole';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesUpdateRolePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesUpdateRolePut$Plain$Response(params?: ApiRolesUpdateRolePut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiRolesUpdateRolePut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesUpdateRolePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesUpdateRolePut$Plain(params?: ApiRolesUpdateRolePut$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiRolesUpdateRolePut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesUpdateRolePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesUpdateRolePut$Json$Response(params?: ApiRolesUpdateRolePut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiRolesUpdateRolePut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesUpdateRolePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesUpdateRolePut$Json(params?: ApiRolesUpdateRolePut$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiRolesUpdateRolePut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiRolesDeleteRoleDelete()` */
  static readonly ApiRolesDeleteRoleDeletePath = '/api/Roles/DeleteRole';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesDeleteRoleDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesDeleteRoleDelete$Plain$Response(params?: ApiRolesDeleteRoleDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiRolesDeleteRoleDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesDeleteRoleDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesDeleteRoleDelete$Plain(params?: ApiRolesDeleteRoleDelete$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiRolesDeleteRoleDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesDeleteRoleDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesDeleteRoleDelete$Json$Response(params?: ApiRolesDeleteRoleDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiRolesDeleteRoleDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesDeleteRoleDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesDeleteRoleDelete$Json(params?: ApiRolesDeleteRoleDelete$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiRolesDeleteRoleDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

}
