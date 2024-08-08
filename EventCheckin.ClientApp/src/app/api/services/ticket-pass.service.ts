/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiTicketPassAddTicketPassPost$Json } from '../fn/ticket-pass/api-ticket-pass-add-ticket-pass-post-json';
import { ApiTicketPassAddTicketPassPost$Json$Params } from '../fn/ticket-pass/api-ticket-pass-add-ticket-pass-post-json';
import { apiTicketPassAddTicketPassPost$Plain } from '../fn/ticket-pass/api-ticket-pass-add-ticket-pass-post-plain';
import { ApiTicketPassAddTicketPassPost$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-add-ticket-pass-post-plain';
import { apiTicketPassDeleteTicketPassPut$Json } from '../fn/ticket-pass/api-ticket-pass-delete-ticket-pass-put-json';
import { ApiTicketPassDeleteTicketPassPut$Json$Params } from '../fn/ticket-pass/api-ticket-pass-delete-ticket-pass-put-json';
import { apiTicketPassDeleteTicketPassPut$Plain } from '../fn/ticket-pass/api-ticket-pass-delete-ticket-pass-put-plain';
import { ApiTicketPassDeleteTicketPassPut$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-delete-ticket-pass-put-plain';
import { apiTicketPassGetPassesGet$Json } from '../fn/ticket-pass/api-ticket-pass-get-passes-get-json';
import { ApiTicketPassGetPassesGet$Json$Params } from '../fn/ticket-pass/api-ticket-pass-get-passes-get-json';
import { apiTicketPassGetPassesGet$Plain } from '../fn/ticket-pass/api-ticket-pass-get-passes-get-plain';
import { ApiTicketPassGetPassesGet$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-get-passes-get-plain';
import { apiTicketPassGetTicketPassGet$Json } from '../fn/ticket-pass/api-ticket-pass-get-ticket-pass-get-json';
import { ApiTicketPassGetTicketPassGet$Json$Params } from '../fn/ticket-pass/api-ticket-pass-get-ticket-pass-get-json';
import { apiTicketPassGetTicketPassGet$Plain } from '../fn/ticket-pass/api-ticket-pass-get-ticket-pass-get-plain';
import { ApiTicketPassGetTicketPassGet$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-get-ticket-pass-get-plain';
import { apiTicketPassListTicketPasssGet$Json } from '../fn/ticket-pass/api-ticket-pass-list-ticket-passs-get-json';
import { ApiTicketPassListTicketPasssGet$Json$Params } from '../fn/ticket-pass/api-ticket-pass-list-ticket-passs-get-json';
import { apiTicketPassListTicketPasssGet$Plain } from '../fn/ticket-pass/api-ticket-pass-list-ticket-passs-get-plain';
import { ApiTicketPassListTicketPasssGet$Plain$Params } from '../fn/ticket-pass/api-ticket-pass-list-ticket-passs-get-plain';
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

}
