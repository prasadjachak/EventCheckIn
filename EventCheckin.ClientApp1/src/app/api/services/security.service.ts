/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiSecurityPermissionsSingleSavePost$Json } from '../fn/security/api-security-permissions-single-save-post-json';
import { ApiSecurityPermissionsSingleSavePost$Json$Params } from '../fn/security/api-security-permissions-single-save-post-json';
import { apiSecurityPermissionsSingleSavePost$Plain } from '../fn/security/api-security-permissions-single-save-post-plain';
import { ApiSecurityPermissionsSingleSavePost$Plain$Params } from '../fn/security/api-security-permissions-single-save-post-plain';
import { CustomApiResponse } from '../models/custom-api-response';

@Injectable({ providedIn: 'root' })
export class SecurityService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiSecurityPermissionsSingleSavePost()` */
  static readonly ApiSecurityPermissionsSingleSavePostPath = '/api/Security/PermissionsSingleSave';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSecurityPermissionsSingleSavePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityPermissionsSingleSavePost$Plain$Response(params?: ApiSecurityPermissionsSingleSavePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiSecurityPermissionsSingleSavePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSecurityPermissionsSingleSavePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityPermissionsSingleSavePost$Plain(params?: ApiSecurityPermissionsSingleSavePost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiSecurityPermissionsSingleSavePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSecurityPermissionsSingleSavePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityPermissionsSingleSavePost$Json$Response(params?: ApiSecurityPermissionsSingleSavePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiSecurityPermissionsSingleSavePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSecurityPermissionsSingleSavePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSecurityPermissionsSingleSavePost$Json(params?: ApiSecurityPermissionsSingleSavePost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiSecurityPermissionsSingleSavePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

}
