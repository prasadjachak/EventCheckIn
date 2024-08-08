/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUserRolesAddUserRolePost } from '../fn/user-roles/api-user-roles-add-user-role-post';
import { ApiUserRolesAddUserRolePost$Params } from '../fn/user-roles/api-user-roles-add-user-role-post';
import { apiUserRolesDeleteUserRoleIdRoleIdDelete } from '../fn/user-roles/api-user-roles-delete-user-role-id-role-id-delete';
import { ApiUserRolesDeleteUserRoleIdRoleIdDelete$Params } from '../fn/user-roles/api-user-roles-delete-user-role-id-role-id-delete';
import { apiUserRolesListUserRolesIdGet } from '../fn/user-roles/api-user-roles-list-user-roles-id-get';
import { ApiUserRolesListUserRolesIdGet$Params } from '../fn/user-roles/api-user-roles-list-user-roles-id-get';

@Injectable({ providedIn: 'root' })
export class UserRolesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserRolesListUserRolesIdGet()` */
  static readonly ApiUserRolesListUserRolesIdGetPath = '/api/UserRoles/ListUserRoles/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRolesListUserRolesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRolesListUserRolesIdGet$Response(params: ApiUserRolesListUserRolesIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserRolesListUserRolesIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRolesListUserRolesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRolesListUserRolesIdGet(params: ApiUserRolesListUserRolesIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiUserRolesListUserRolesIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserRolesAddUserRolePost()` */
  static readonly ApiUserRolesAddUserRolePostPath = '/api/UserRoles/AddUserRole';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRolesAddUserRolePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRolesAddUserRolePost$Response(params?: ApiUserRolesAddUserRolePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserRolesAddUserRolePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRolesAddUserRolePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRolesAddUserRolePost(params?: ApiUserRolesAddUserRolePost$Params, context?: HttpContext): Observable<void> {
    return this.apiUserRolesAddUserRolePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserRolesDeleteUserRoleIdRoleIdDelete()` */
  static readonly ApiUserRolesDeleteUserRoleIdRoleIdDeletePath = '/api/UserRoles/DeleteUserRole/{Id}/{RoleId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRolesDeleteUserRoleIdRoleIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRolesDeleteUserRoleIdRoleIdDelete$Response(params: ApiUserRolesDeleteUserRoleIdRoleIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserRolesDeleteUserRoleIdRoleIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRolesDeleteUserRoleIdRoleIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRolesDeleteUserRoleIdRoleIdDelete(params: ApiUserRolesDeleteUserRoleIdRoleIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiUserRolesDeleteUserRoleIdRoleIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
