/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiRolesAddRolePost } from '../fn/roles/api-roles-add-role-post';
import { ApiRolesAddRolePost$Params } from '../fn/roles/api-roles-add-role-post';
import { apiRolesGetGet$Json } from '../fn/roles/api-roles-get-get-json';
import { ApiRolesGetGet$Json$Params } from '../fn/roles/api-roles-get-get-json';
import { apiRolesGetGet$Plain } from '../fn/roles/api-roles-get-get-plain';
import { ApiRolesGetGet$Plain$Params } from '../fn/roles/api-roles-get-get-plain';
import { apiRolesRemoveIdDelete } from '../fn/roles/api-roles-remove-id-delete';
import { ApiRolesRemoveIdDelete$Params } from '../fn/roles/api-roles-remove-id-delete';
import { apiRolesUpdateRoleIdPut } from '../fn/roles/api-roles-update-role-id-put';
import { ApiRolesUpdateRoleIdPut$Params } from '../fn/roles/api-roles-update-role-id-put';
import { ApplicationRole } from '../models/application-role';

@Injectable({ providedIn: 'root' })
export class RolesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiRolesGetGet()` */
  static readonly ApiRolesGetGetPath = '/api/Roles/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesGetGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesGetGet$Plain$Response(params?: ApiRolesGetGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApplicationRole>>> {
    return apiRolesGetGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesGetGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesGetGet$Plain(params?: ApiRolesGetGet$Plain$Params, context?: HttpContext): Observable<Array<ApplicationRole>> {
    return this.apiRolesGetGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApplicationRole>>): Array<ApplicationRole> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesGetGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesGetGet$Json$Response(params?: ApiRolesGetGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApplicationRole>>> {
    return apiRolesGetGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesGetGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesGetGet$Json(params?: ApiRolesGetGet$Json$Params, context?: HttpContext): Observable<Array<ApplicationRole>> {
    return this.apiRolesGetGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApplicationRole>>): Array<ApplicationRole> => r.body)
    );
  }

  /** Path part for operation `apiRolesAddRolePost()` */
  static readonly ApiRolesAddRolePostPath = '/api/Roles/AddRole';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesAddRolePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesAddRolePost$Response(params?: ApiRolesAddRolePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRolesAddRolePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesAddRolePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesAddRolePost(params?: ApiRolesAddRolePost$Params, context?: HttpContext): Observable<void> {
    return this.apiRolesAddRolePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRolesUpdateRoleIdPut()` */
  static readonly ApiRolesUpdateRoleIdPutPath = '/api/Roles/UpdateRole/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesUpdateRoleIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesUpdateRoleIdPut$Response(params: ApiRolesUpdateRoleIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRolesUpdateRoleIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesUpdateRoleIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolesUpdateRoleIdPut(params: ApiRolesUpdateRoleIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiRolesUpdateRoleIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRolesRemoveIdDelete()` */
  static readonly ApiRolesRemoveIdDeletePath = '/api/Roles/Remove/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolesRemoveIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesRemoveIdDelete$Response(params: ApiRolesRemoveIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRolesRemoveIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRolesRemoveIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRolesRemoveIdDelete(params: ApiRolesRemoveIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiRolesRemoveIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
