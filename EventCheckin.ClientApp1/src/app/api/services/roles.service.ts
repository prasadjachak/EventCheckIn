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
import { apiRolesDeleteRoleIdDelete$Json } from '../fn/roles/api-roles-delete-role-id-delete-json';
import { ApiRolesDeleteRoleIdDelete$Json$Params } from '../fn/roles/api-roles-delete-role-id-delete-json';
import { apiRolesDeleteRoleIdDelete$Plain } from '../fn/roles/api-roles-delete-role-id-delete-plain';
import { ApiRolesDeleteRoleIdDelete$Plain$Params } from '../fn/roles/api-roles-delete-role-id-delete-plain';
import { apiRolesListRoleGet$Json } from '../fn/roles/api-roles-list-role-get-json';
import { ApiRolesListRoleGet$Json$Params } from '../fn/roles/api-roles-list-role-get-json';
import { apiRolesListRoleGet$Plain } from '../fn/roles/api-roles-list-role-get-plain';
import { ApiRolesListRoleGet$Plain$Params } from '../fn/roles/api-roles-list-role-get-plain';
import { apiRolesUpdateRoleIdPut$Json } from '../fn/roles/api-roles-update-role-id-put-json';
import { ApiRolesUpdateRoleIdPut$Json$Params } from '../fn/roles/api-roles-update-role-id-put-json';
import { apiRolesUpdateRoleIdPut$Plain } from '../fn/roles/api-roles-update-role-id-put-plain';
import { ApiRolesUpdateRoleIdPut$Plain$Params } from '../fn/roles/api-roles-update-role-id-put-plain';
import { ApplicationRole } from '../models/application-role';
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
  apiRolesListRoleGet$Plain$Response(params?: ApiRolesListRoleGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApplicationRole>>> {
    return apiRolesListRoleGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesListRoleGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesListRoleGet$Plain(params?: ApiRolesListRoleGet$Plain$Params, context?: HttpContext): Observable<Array<ApplicationRole>> {
    return this.apiRolesListRoleGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApplicationRole>>): Array<ApplicationRole> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesListRoleGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesListRoleGet$Json$Response(params?: ApiRolesListRoleGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApplicationRole>>> {
    return apiRolesListRoleGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesListRoleGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesListRoleGet$Json(params?: ApiRolesListRoleGet$Json$Params, context?: HttpContext): Observable<Array<ApplicationRole>> {
    return this.apiRolesListRoleGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApplicationRole>>): Array<ApplicationRole> => r.body)
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

  /** Path part for operation `apiRolesUpdateRoleIdPut()` */
  static readonly ApiRolesUpdateRoleIdPutPath = '/api/Roles/UpdateRole/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesUpdateRoleIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesUpdateRoleIdPut$Plain$Response(params: ApiRolesUpdateRoleIdPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiRolesUpdateRoleIdPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesUpdateRoleIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesUpdateRoleIdPut$Plain(params: ApiRolesUpdateRoleIdPut$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiRolesUpdateRoleIdPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesUpdateRoleIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesUpdateRoleIdPut$Json$Response(params: ApiRolesUpdateRoleIdPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiRolesUpdateRoleIdPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesUpdateRoleIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesUpdateRoleIdPut$Json(params: ApiRolesUpdateRoleIdPut$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiRolesUpdateRoleIdPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiRolesDeleteRoleIdDelete()` */
  static readonly ApiRolesDeleteRoleIdDeletePath = '/api/Roles/DeleteRole/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesDeleteRoleIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesDeleteRoleIdDelete$Plain$Response(params: ApiRolesDeleteRoleIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiRolesDeleteRoleIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesDeleteRoleIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesDeleteRoleIdDelete$Plain(params: ApiRolesDeleteRoleIdDelete$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiRolesDeleteRoleIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesDeleteRoleIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesDeleteRoleIdDelete$Json$Response(params: ApiRolesDeleteRoleIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiRolesDeleteRoleIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesDeleteRoleIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesDeleteRoleIdDelete$Json(params: ApiRolesDeleteRoleIdDelete$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiRolesDeleteRoleIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

}
