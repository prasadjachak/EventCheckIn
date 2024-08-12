/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiTicketPassAddDeleteTicketPassesPost$Json } from '../fn/ticket-pass/api-ticket-pass-add-delete-ticket-passes-post-json';
import { ApiTicketPassAddDeleteTicketPassesPost$Json$Params } from '../fn/ticket-pass/api-ticket-pass-add-delete-ticket-passes-post-json';
import { apiTicketPassAddDeleteTicketPassesPost$Plain } from '../fn/ticket-pass/api-ticket-pass-add-delete-ticket-passes-post-plain';
import { ApiTicketPassAddDeleteTicketPassesPost$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-add-delete-ticket-passes-post-plain';
import { apiTicketPassAddMultipleTicketPassesPost$Json } from '../fn/ticket-pass/api-ticket-pass-add-multiple-ticket-passes-post-json';
import { ApiTicketPassAddMultipleTicketPassesPost$Json$Params } from '../fn/ticket-pass/api-ticket-pass-add-multiple-ticket-passes-post-json';
import { apiTicketPassAddMultipleTicketPassesPost$Plain } from '../fn/ticket-pass/api-ticket-pass-add-multiple-ticket-passes-post-plain';
import { ApiTicketPassAddMultipleTicketPassesPost$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-add-multiple-ticket-passes-post-plain';
import { apiTicketPassAddSecurityEntryPassStatusPost$Json } from '../fn/ticket-pass/api-ticket-pass-add-security-entry-pass-status-post-json';
import { ApiTicketPassAddSecurityEntryPassStatusPost$Json$Params } from '../fn/ticket-pass/api-ticket-pass-add-security-entry-pass-status-post-json';
import { apiTicketPassAddSecurityEntryPassStatusPost$Plain } from '../fn/ticket-pass/api-ticket-pass-add-security-entry-pass-status-post-plain';
import { ApiTicketPassAddSecurityEntryPassStatusPost$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-add-security-entry-pass-status-post-plain';
import { apiTicketPassAddSecurityParkingPassStatusPost$Json } from '../fn/ticket-pass/api-ticket-pass-add-security-parking-pass-status-post-json';
import { ApiTicketPassAddSecurityParkingPassStatusPost$Json$Params } from '../fn/ticket-pass/api-ticket-pass-add-security-parking-pass-status-post-json';
import { apiTicketPassAddSecurityParkingPassStatusPost$Plain } from '../fn/ticket-pass/api-ticket-pass-add-security-parking-pass-status-post-plain';
import { ApiTicketPassAddSecurityParkingPassStatusPost$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-add-security-parking-pass-status-post-plain';
import { apiTicketPassAddTicketPassPost$Json } from '../fn/ticket-pass/api-ticket-pass-add-ticket-pass-post-json';
import { ApiTicketPassAddTicketPassPost$Json$Params } from '../fn/ticket-pass/api-ticket-pass-add-ticket-pass-post-json';
import { apiTicketPassAddTicketPassPost$Plain } from '../fn/ticket-pass/api-ticket-pass-add-ticket-pass-post-plain';
import { ApiTicketPassAddTicketPassPost$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-add-ticket-pass-post-plain';
import { apiTicketPassDeleteTicketPassPut$Json } from '../fn/ticket-pass/api-ticket-pass-delete-ticket-pass-put-json';
import { ApiTicketPassDeleteTicketPassPut$Json$Params } from '../fn/ticket-pass/api-ticket-pass-delete-ticket-pass-put-json';
import { apiTicketPassDeleteTicketPassPut$Plain } from '../fn/ticket-pass/api-ticket-pass-delete-ticket-pass-put-plain';
import { ApiTicketPassDeleteTicketPassPut$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-delete-ticket-pass-put-plain';
import { apiTicketPassGetAssignTicketPassesPost$Json } from '../fn/ticket-pass/api-ticket-pass-get-assign-ticket-passes-post-json';
import { ApiTicketPassGetAssignTicketPassesPost$Json$Params } from '../fn/ticket-pass/api-ticket-pass-get-assign-ticket-passes-post-json';
import { apiTicketPassGetAssignTicketPassesPost$Plain } from '../fn/ticket-pass/api-ticket-pass-get-assign-ticket-passes-post-plain';
import { ApiTicketPassGetAssignTicketPassesPost$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-get-assign-ticket-passes-post-plain';
import { apiTicketPassGetCheckParkingPassesPost$Json } from '../fn/ticket-pass/api-ticket-pass-get-check-parking-passes-post-json';
import { ApiTicketPassGetCheckParkingPassesPost$Json$Params } from '../fn/ticket-pass/api-ticket-pass-get-check-parking-passes-post-json';
import { apiTicketPassGetCheckParkingPassesPost$Plain } from '../fn/ticket-pass/api-ticket-pass-get-check-parking-passes-post-plain';
import { ApiTicketPassGetCheckParkingPassesPost$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-get-check-parking-passes-post-plain';
import { apiTicketPassGetCheckTicketPassesPost$Json } from '../fn/ticket-pass/api-ticket-pass-get-check-ticket-passes-post-json';
import { ApiTicketPassGetCheckTicketPassesPost$Json$Params } from '../fn/ticket-pass/api-ticket-pass-get-check-ticket-passes-post-json';
import { apiTicketPassGetCheckTicketPassesPost$Plain } from '../fn/ticket-pass/api-ticket-pass-get-check-ticket-passes-post-plain';
import { ApiTicketPassGetCheckTicketPassesPost$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-get-check-ticket-passes-post-plain';
import { apiTicketPassGetParkingTicketOtpPost$Json } from '../fn/ticket-pass/api-ticket-pass-get-parking-ticket-otp-post-json';
import { ApiTicketPassGetParkingTicketOtpPost$Json$Params } from '../fn/ticket-pass/api-ticket-pass-get-parking-ticket-otp-post-json';
import { apiTicketPassGetParkingTicketOtpPost$Plain } from '../fn/ticket-pass/api-ticket-pass-get-parking-ticket-otp-post-plain';
import { ApiTicketPassGetParkingTicketOtpPost$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-get-parking-ticket-otp-post-plain';
import { apiTicketPassGetPassesGet$Json } from '../fn/ticket-pass/api-ticket-pass-get-passes-get-json';
import { ApiTicketPassGetPassesGet$Json$Params } from '../fn/ticket-pass/api-ticket-pass-get-passes-get-json';
import { apiTicketPassGetPassesGet$Plain } from '../fn/ticket-pass/api-ticket-pass-get-passes-get-plain';
import { ApiTicketPassGetPassesGet$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-get-passes-get-plain';
import { apiTicketPassGetTicketOtpPost$Json } from '../fn/ticket-pass/api-ticket-pass-get-ticket-otp-post-json';
import { ApiTicketPassGetTicketOtpPost$Json$Params } from '../fn/ticket-pass/api-ticket-pass-get-ticket-otp-post-json';
import { apiTicketPassGetTicketOtpPost$Plain } from '../fn/ticket-pass/api-ticket-pass-get-ticket-otp-post-plain';
import { ApiTicketPassGetTicketOtpPost$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-get-ticket-otp-post-plain';
import { apiTicketPassGetTicketPassGet$Json } from '../fn/ticket-pass/api-ticket-pass-get-ticket-pass-get-json';
import { ApiTicketPassGetTicketPassGet$Json$Params } from '../fn/ticket-pass/api-ticket-pass-get-ticket-pass-get-json';
import { apiTicketPassGetTicketPassGet$Plain } from '../fn/ticket-pass/api-ticket-pass-get-ticket-pass-get-plain';
import { ApiTicketPassGetTicketPassGet$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-get-ticket-pass-get-plain';
import { apiTicketPassListTicketPasssGet$Json } from '../fn/ticket-pass/api-ticket-pass-list-ticket-passs-get-json';
import { ApiTicketPassListTicketPasssGet$Json$Params } from '../fn/ticket-pass/api-ticket-pass-list-ticket-passs-get-json';
import { apiTicketPassListTicketPasssGet$Plain } from '../fn/ticket-pass/api-ticket-pass-list-ticket-passs-get-plain';
import { ApiTicketPassListTicketPasssGet$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-list-ticket-passs-get-plain';
import { apiTicketPassListUserPost$Json } from '../fn/ticket-pass/api-ticket-pass-list-user-post-json';
import { ApiTicketPassListUserPost$Json$Params } from '../fn/ticket-pass/api-ticket-pass-list-user-post-json';
import { apiTicketPassListUserPost$Plain } from '../fn/ticket-pass/api-ticket-pass-list-user-post-plain';
import { ApiTicketPassListUserPost$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-list-user-post-plain';
import { apiTicketPassUpdateTicketPassPut$Json } from '../fn/ticket-pass/api-ticket-pass-update-ticket-pass-put-json';
import { ApiTicketPassUpdateTicketPassPut$Json$Params } from '../fn/ticket-pass/api-ticket-pass-update-ticket-pass-put-json';
import { apiTicketPassUpdateTicketPassPut$Plain } from '../fn/ticket-pass/api-ticket-pass-update-ticket-pass-put-plain';
import { ApiTicketPassUpdateTicketPassPut$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-update-ticket-pass-put-plain';
import { CustomApiResponse } from '../models/custom-api-response';

@Injectable({ providedIn: 'root' })
export class TicketPassService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiTicketPassListTicketPasssGet()` */
  static readonly ApiTicketPassListTicketPasssGetPath = '/api/TicketPass/ListTicketPasss';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassListTicketPasssGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassListTicketPasssGet$Plain$Response(params?: ApiTicketPassListTicketPasssGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassListTicketPasssGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassListTicketPasssGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassListTicketPasssGet$Plain(params?: ApiTicketPassListTicketPasssGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassListTicketPasssGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassListTicketPasssGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassListTicketPasssGet$Json$Response(params?: ApiTicketPassListTicketPasssGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassListTicketPasssGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassListTicketPasssGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassListTicketPasssGet$Json(params?: ApiTicketPassListTicketPasssGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassListTicketPasssGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiTicketPassGetTicketPassGet()` */
  static readonly ApiTicketPassGetTicketPassGetPath = '/api/TicketPass/GetTicketPass';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassGetTicketPassGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassGetTicketPassGet$Plain$Response(params?: ApiTicketPassGetTicketPassGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassGetTicketPassGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassGetTicketPassGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassGetTicketPassGet$Plain(params?: ApiTicketPassGetTicketPassGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassGetTicketPassGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassGetTicketPassGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassGetTicketPassGet$Json$Response(params?: ApiTicketPassGetTicketPassGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassGetTicketPassGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassGetTicketPassGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassGetTicketPassGet$Json(params?: ApiTicketPassGetTicketPassGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassGetTicketPassGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiTicketPassAddTicketPassPost()` */
  static readonly ApiTicketPassAddTicketPassPostPath = '/api/TicketPass/AddTicketPass';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassAddTicketPassPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddTicketPassPost$Plain$Response(params?: ApiTicketPassAddTicketPassPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassAddTicketPassPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassAddTicketPassPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddTicketPassPost$Plain(params?: ApiTicketPassAddTicketPassPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassAddTicketPassPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassAddTicketPassPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddTicketPassPost$Json$Response(params?: ApiTicketPassAddTicketPassPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassAddTicketPassPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassAddTicketPassPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddTicketPassPost$Json(params?: ApiTicketPassAddTicketPassPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassAddTicketPassPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiTicketPassUpdateTicketPassPut()` */
  static readonly ApiTicketPassUpdateTicketPassPutPath = '/api/TicketPass/UpdateTicketPass';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassUpdateTicketPassPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassUpdateTicketPassPut$Plain$Response(params?: ApiTicketPassUpdateTicketPassPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassUpdateTicketPassPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassUpdateTicketPassPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassUpdateTicketPassPut$Plain(params?: ApiTicketPassUpdateTicketPassPut$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassUpdateTicketPassPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassUpdateTicketPassPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassUpdateTicketPassPut$Json$Response(params?: ApiTicketPassUpdateTicketPassPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassUpdateTicketPassPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassUpdateTicketPassPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassUpdateTicketPassPut$Json(params?: ApiTicketPassUpdateTicketPassPut$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassUpdateTicketPassPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiTicketPassDeleteTicketPassPut()` */
  static readonly ApiTicketPassDeleteTicketPassPutPath = '/api/TicketPass/DeleteTicketPass';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassDeleteTicketPassPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassDeleteTicketPassPut$Plain$Response(params?: ApiTicketPassDeleteTicketPassPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassDeleteTicketPassPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassDeleteTicketPassPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassDeleteTicketPassPut$Plain(params?: ApiTicketPassDeleteTicketPassPut$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassDeleteTicketPassPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassDeleteTicketPassPut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassDeleteTicketPassPut$Json$Response(params?: ApiTicketPassDeleteTicketPassPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassDeleteTicketPassPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassDeleteTicketPassPut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassDeleteTicketPassPut$Json(params?: ApiTicketPassDeleteTicketPassPut$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassDeleteTicketPassPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiTicketPassGetPassesGet()` */
  static readonly ApiTicketPassGetPassesGetPath = '/api/TicketPass/GetPasses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassGetPassesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassGetPassesGet$Plain$Response(params?: ApiTicketPassGetPassesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassGetPassesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassGetPassesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassGetPassesGet$Plain(params?: ApiTicketPassGetPassesGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassGetPassesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassGetPassesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassGetPassesGet$Json$Response(params?: ApiTicketPassGetPassesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassGetPassesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassGetPassesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketPassGetPassesGet$Json(params?: ApiTicketPassGetPassesGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassGetPassesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiTicketPassGetTicketOtpPost()` */
  static readonly ApiTicketPassGetTicketOtpPostPath = '/api/TicketPass/GetTicketOtp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassGetTicketOtpPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetTicketOtpPost$Plain$Response(params?: ApiTicketPassGetTicketOtpPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassGetTicketOtpPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassGetTicketOtpPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetTicketOtpPost$Plain(params?: ApiTicketPassGetTicketOtpPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassGetTicketOtpPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassGetTicketOtpPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetTicketOtpPost$Json$Response(params?: ApiTicketPassGetTicketOtpPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassGetTicketOtpPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassGetTicketOtpPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetTicketOtpPost$Json(params?: ApiTicketPassGetTicketOtpPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassGetTicketOtpPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiTicketPassGetParkingTicketOtpPost()` */
  static readonly ApiTicketPassGetParkingTicketOtpPostPath = '/api/TicketPass/GetParkingTicketOtp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassGetParkingTicketOtpPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetParkingTicketOtpPost$Plain$Response(params?: ApiTicketPassGetParkingTicketOtpPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassGetParkingTicketOtpPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassGetParkingTicketOtpPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetParkingTicketOtpPost$Plain(params?: ApiTicketPassGetParkingTicketOtpPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassGetParkingTicketOtpPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassGetParkingTicketOtpPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetParkingTicketOtpPost$Json$Response(params?: ApiTicketPassGetParkingTicketOtpPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassGetParkingTicketOtpPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassGetParkingTicketOtpPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetParkingTicketOtpPost$Json(params?: ApiTicketPassGetParkingTicketOtpPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassGetParkingTicketOtpPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiTicketPassListUserPost()` */
  static readonly ApiTicketPassListUserPostPath = '/api/TicketPass/ListUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassListUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassListUserPost$Plain$Response(params?: ApiTicketPassListUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassListUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassListUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassListUserPost$Plain(params?: ApiTicketPassListUserPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassListUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassListUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassListUserPost$Json$Response(params?: ApiTicketPassListUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassListUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassListUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassListUserPost$Json(params?: ApiTicketPassListUserPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassListUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiTicketPassAddMultipleTicketPassesPost()` */
  static readonly ApiTicketPassAddMultipleTicketPassesPostPath = '/api/TicketPass/AddMultipleTicketPasses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassAddMultipleTicketPassesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddMultipleTicketPassesPost$Plain$Response(params?: ApiTicketPassAddMultipleTicketPassesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassAddMultipleTicketPassesPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassAddMultipleTicketPassesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddMultipleTicketPassesPost$Plain(params?: ApiTicketPassAddMultipleTicketPassesPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassAddMultipleTicketPassesPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassAddMultipleTicketPassesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddMultipleTicketPassesPost$Json$Response(params?: ApiTicketPassAddMultipleTicketPassesPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassAddMultipleTicketPassesPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassAddMultipleTicketPassesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddMultipleTicketPassesPost$Json(params?: ApiTicketPassAddMultipleTicketPassesPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassAddMultipleTicketPassesPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiTicketPassAddDeleteTicketPassesPost()` */
  static readonly ApiTicketPassAddDeleteTicketPassesPostPath = '/api/TicketPass/AddDeleteTicketPasses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassAddDeleteTicketPassesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddDeleteTicketPassesPost$Plain$Response(params?: ApiTicketPassAddDeleteTicketPassesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassAddDeleteTicketPassesPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassAddDeleteTicketPassesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddDeleteTicketPassesPost$Plain(params?: ApiTicketPassAddDeleteTicketPassesPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassAddDeleteTicketPassesPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassAddDeleteTicketPassesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddDeleteTicketPassesPost$Json$Response(params?: ApiTicketPassAddDeleteTicketPassesPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassAddDeleteTicketPassesPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassAddDeleteTicketPassesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddDeleteTicketPassesPost$Json(params?: ApiTicketPassAddDeleteTicketPassesPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassAddDeleteTicketPassesPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiTicketPassGetAssignTicketPassesPost()` */
  static readonly ApiTicketPassGetAssignTicketPassesPostPath = '/api/TicketPass/GetAssignTicketPasses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassGetAssignTicketPassesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetAssignTicketPassesPost$Plain$Response(params?: ApiTicketPassGetAssignTicketPassesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassGetAssignTicketPassesPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassGetAssignTicketPassesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetAssignTicketPassesPost$Plain(params?: ApiTicketPassGetAssignTicketPassesPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassGetAssignTicketPassesPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassGetAssignTicketPassesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetAssignTicketPassesPost$Json$Response(params?: ApiTicketPassGetAssignTicketPassesPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassGetAssignTicketPassesPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassGetAssignTicketPassesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetAssignTicketPassesPost$Json(params?: ApiTicketPassGetAssignTicketPassesPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassGetAssignTicketPassesPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiTicketPassGetCheckTicketPassesPost()` */
  static readonly ApiTicketPassGetCheckTicketPassesPostPath = '/api/TicketPass/GetCheckTicketPasses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassGetCheckTicketPassesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetCheckTicketPassesPost$Plain$Response(params?: ApiTicketPassGetCheckTicketPassesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassGetCheckTicketPassesPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassGetCheckTicketPassesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetCheckTicketPassesPost$Plain(params?: ApiTicketPassGetCheckTicketPassesPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassGetCheckTicketPassesPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassGetCheckTicketPassesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetCheckTicketPassesPost$Json$Response(params?: ApiTicketPassGetCheckTicketPassesPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassGetCheckTicketPassesPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassGetCheckTicketPassesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetCheckTicketPassesPost$Json(params?: ApiTicketPassGetCheckTicketPassesPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassGetCheckTicketPassesPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiTicketPassAddSecurityEntryPassStatusPost()` */
  static readonly ApiTicketPassAddSecurityEntryPassStatusPostPath = '/api/TicketPass/AddSecurityEntryPassStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassAddSecurityEntryPassStatusPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddSecurityEntryPassStatusPost$Plain$Response(params?: ApiTicketPassAddSecurityEntryPassStatusPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassAddSecurityEntryPassStatusPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassAddSecurityEntryPassStatusPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddSecurityEntryPassStatusPost$Plain(params?: ApiTicketPassAddSecurityEntryPassStatusPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassAddSecurityEntryPassStatusPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassAddSecurityEntryPassStatusPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddSecurityEntryPassStatusPost$Json$Response(params?: ApiTicketPassAddSecurityEntryPassStatusPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassAddSecurityEntryPassStatusPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassAddSecurityEntryPassStatusPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddSecurityEntryPassStatusPost$Json(params?: ApiTicketPassAddSecurityEntryPassStatusPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassAddSecurityEntryPassStatusPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiTicketPassGetCheckParkingPassesPost()` */
  static readonly ApiTicketPassGetCheckParkingPassesPostPath = '/api/TicketPass/GetCheckParkingPasses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassGetCheckParkingPassesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetCheckParkingPassesPost$Plain$Response(params?: ApiTicketPassGetCheckParkingPassesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassGetCheckParkingPassesPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassGetCheckParkingPassesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetCheckParkingPassesPost$Plain(params?: ApiTicketPassGetCheckParkingPassesPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassGetCheckParkingPassesPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassGetCheckParkingPassesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetCheckParkingPassesPost$Json$Response(params?: ApiTicketPassGetCheckParkingPassesPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassGetCheckParkingPassesPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassGetCheckParkingPassesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassGetCheckParkingPassesPost$Json(params?: ApiTicketPassGetCheckParkingPassesPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassGetCheckParkingPassesPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiTicketPassAddSecurityParkingPassStatusPost()` */
  static readonly ApiTicketPassAddSecurityParkingPassStatusPostPath = '/api/TicketPass/AddSecurityParkingPassStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassAddSecurityParkingPassStatusPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddSecurityParkingPassStatusPost$Plain$Response(params?: ApiTicketPassAddSecurityParkingPassStatusPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassAddSecurityParkingPassStatusPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassAddSecurityParkingPassStatusPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddSecurityParkingPassStatusPost$Plain(params?: ApiTicketPassAddSecurityParkingPassStatusPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassAddSecurityParkingPassStatusPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketPassAddSecurityParkingPassStatusPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddSecurityParkingPassStatusPost$Json$Response(params?: ApiTicketPassAddSecurityParkingPassStatusPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiTicketPassAddSecurityParkingPassStatusPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketPassAddSecurityParkingPassStatusPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketPassAddSecurityParkingPassStatusPost$Json(params?: ApiTicketPassAddSecurityParkingPassStatusPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiTicketPassAddSecurityParkingPassStatusPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

}
