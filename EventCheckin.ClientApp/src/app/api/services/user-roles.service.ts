/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUserRolesAddPost } from '../fn/user-roles/api-user-roles-add-post';
import { ApiUserRolesAddPost$Params } from '../fn/user-roles/api-user-roles-add-post';
import { apiUserRolesDeleteIdRoleIdDelete } from '../fn/user-roles/api-user-roles-delete-id-role-id-delete';
import { ApiUserRolesDeleteIdRoleIdDelete$Params } from '../fn/user-roles/api-user-roles-delete-id-role-id-delete';
import { apiUserRolesGetIdGet } from '../fn/user-roles/api-user-roles-get-id-get';
import { ApiUserRolesGetIdGet$Params } from '../fn/user-roles/api-user-roles-get-id-get';

@Injectable({ providedIn: 'root' })
export class UserRolesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserRolesGetIdGet()` */
  static readonly ApiUserRolesGetIdGetPath = '/api/UserRoles/Get/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRolesGetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRolesGetIdGet$Response(params: ApiUserRolesGetIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserRolesGetIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRolesGetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRolesGetIdGet(params: ApiUserRolesGetIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiUserRolesGetIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserRolesAddPost()` */
  static readonly ApiUserRolesAddPostPath = '/api/UserRoles/Add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRolesAddPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRolesAddPost$Response(params?: ApiUserRolesAddPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserRolesAddPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRolesAddPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRolesAddPost(params?: ApiUserRolesAddPost$Params, context?: HttpContext): Observable<void> {
    return this.apiUserRolesAddPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserRolesDeleteIdRoleIdDelete()` */
  static readonly ApiUserRolesDeleteIdRoleIdDeletePath = '/api/UserRoles/Delete/{Id}/{RoleId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRolesDeleteIdRoleIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRolesDeleteIdRoleIdDelete$Response(params: ApiUserRolesDeleteIdRoleIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserRolesDeleteIdRoleIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRolesDeleteIdRoleIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRolesDeleteIdRoleIdDelete(params: ApiUserRolesDeleteIdRoleIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiUserRolesDeleteIdRoleIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
