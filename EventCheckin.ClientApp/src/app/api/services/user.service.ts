/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUserDeleteIdDelete } from '../fn/user/api-user-delete-id-delete';
import { ApiUserDeleteIdDelete$Params } from '../fn/user/api-user-delete-id-delete';
import { apiUserGetGet$Json } from '../fn/user/api-user-get-get-json';
import { ApiUserGetGet$Json$Params } from '../fn/user/api-user-get-get-json';
import { apiUserGetGet$Plain } from '../fn/user/api-user-get-get-plain';
import { ApiUserGetGet$Plain$Params } from '../fn/user/api-user-get-get-plain';
import { apiUserGetIdGet } from '../fn/user/api-user-get-id-get';
import { ApiUserGetIdGet$Params } from '../fn/user/api-user-get-id-get';
import { apiUserInsertWithRolePost } from '../fn/user/api-user-insert-with-role-post';
import { ApiUserInsertWithRolePost$Params } from '../fn/user/api-user-insert-with-role-post';
import { apiUserUpdateIdPut } from '../fn/user/api-user-update-id-put';
import { ApiUserUpdateIdPut$Params } from '../fn/user/api-user-update-id-put';
import { IdentityUser } from '../models/identity-user';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserGetGet()` */
  static readonly ApiUserGetGetPath = '/api/User/Get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetGet$Plain$Response(params?: ApiUserGetGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<IdentityUser>>> {
    return apiUserGetGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetGet$Plain(params?: ApiUserGetGet$Plain$Params, context?: HttpContext): Observable<Array<IdentityUser>> {
    return this.apiUserGetGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IdentityUser>>): Array<IdentityUser> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetGet$Json$Response(params?: ApiUserGetGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<IdentityUser>>> {
    return apiUserGetGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetGet$Json(params?: ApiUserGetGet$Json$Params, context?: HttpContext): Observable<Array<IdentityUser>> {
    return this.apiUserGetGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IdentityUser>>): Array<IdentityUser> => r.body)
    );
  }

  /** Path part for operation `apiUserGetIdGet()` */
  static readonly ApiUserGetIdGetPath = '/api/User/Get/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetIdGet$Response(params: ApiUserGetIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserGetIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetIdGet(params: ApiUserGetIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiUserGetIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserInsertWithRolePost()` */
  static readonly ApiUserInsertWithRolePostPath = '/api/User/InsertWithRole';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserInsertWithRolePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserInsertWithRolePost$Response(params?: ApiUserInsertWithRolePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserInsertWithRolePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserInsertWithRolePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserInsertWithRolePost(params?: ApiUserInsertWithRolePost$Params, context?: HttpContext): Observable<void> {
    return this.apiUserInsertWithRolePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserUpdateIdPut()` */
  static readonly ApiUserUpdateIdPutPath = '/api/User/Update/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateIdPut$Response(params: ApiUserUpdateIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserUpdateIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUpdateIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateIdPut(params: ApiUserUpdateIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiUserUpdateIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserDeleteIdDelete()` */
  static readonly ApiUserDeleteIdDeletePath = '/api/User/Delete/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDeleteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDeleteIdDelete$Response(params: ApiUserDeleteIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserDeleteIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserDeleteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDeleteIdDelete(params: ApiUserDeleteIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiUserDeleteIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
