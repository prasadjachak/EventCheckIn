/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiEventDayAddEventDayPost$Json } from '../fn/event-day/api-event-day-add-event-day-post-json';
import { ApiEventDayAddEventDayPost$Json$Params } from '../fn/event-day/api-event-day-add-event-day-post-json';
import { apiEventDayAddEventDayPost$Plain } from '../fn/event-day/api-event-day-add-event-day-post-plain';
import { ApiEventDayAddEventDayPost$Plain$Params } from '../fn/event-day/api-event-day-add-event-day-post-plain';
import { apiEventDayDeleteEventEntityPut$Json } from '../fn/event-day/api-event-day-delete-event-entity-put-json';
import { ApiEventDayDeleteEventEntityPut$Json$Params } from '../fn/event-day/api-event-day-delete-event-entity-put-json';
import { apiEventDayDeleteEventEntityPut$Plain } from '../fn/event-day/api-event-day-delete-event-entity-put-plain';
import { ApiEventDayDeleteEventEntityPut$Plain$Params } from '../fn/event-day/api-event-day-delete-event-entity-put-plain';
import { apiEventDayGetEventDayGet$Json } from '../fn/event-day/api-event-day-get-event-day-get-json';
import { ApiEventDayGetEventDayGet$Json$Params } from '../fn/event-day/api-event-day-get-event-day-get-json';
import { apiEventDayGetEventDayGet$Plain } from '../fn/event-day/api-event-day-get-event-day-get-plain';
import { ApiEventDayGetEventDayGet$Plain$Params } from '../fn/event-day/api-event-day-get-event-day-get-plain';
import { apiEventDayListEventDayGet$Json } from '../fn/event-day/api-event-day-list-event-day-get-json';
import { ApiEventDayListEventDayGet$Json$Params } from '../fn/event-day/api-event-day-list-event-day-get-json';
import { apiEventDayListEventDayGet$Plain } from '../fn/event-day/api-event-day-list-event-day-get-plain';
import { ApiEventDayListEventDayGet$Plain$Params } from '../fn/event-day/api-event-day-list-event-day-get-plain';
import { apiEventDayUpdateEventDayPut$Json } from '../fn/event-day/api-event-day-update-event-day-put-json';
import { ApiEventDayUpdateEventDayPut$Json$Params } from '../fn/event-day/api-event-day-update-event-day-put-json';
import { apiEventDayUpdateEventDayPut$Plain } from '../fn/event-day/api-event-day-update-event-day-put-plain';
import { ApiEventDayUpdateEventDayPut$Plain$Params } from '../fn/event-day/api-event-day-update-event-day-put-plain';
import { CustomApiResponse } from '../models/custom-api-response';

@Injectable({ providedIn: 'root' })
export class EventDayService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiEventDayListEventDayGet()` */
  static readonly ApiEventDayListEventDayGetPath = '/api/EventDay/ListEventDay';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDayListEventDayGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayListEventDayGet$Plain$Response(params?: ApiEventDayListEventDayGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventDayListEventDayGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDayListEventDayGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayListEventDayGet$Plain(params?: ApiEventDayListEventDayGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventDayListEventDayGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDayListEventDayGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayListEventDayGet$Json$Response(params?: ApiEventDayListEventDayGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventDayListEventDayGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDayListEventDayGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayListEventDayGet$Json(params?: ApiEventDayListEventDayGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventDayListEventDayGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiEventDayGetEventDayGet()` */
  static readonly ApiEventDayGetEventDayGetPath = '/api/EventDay/GetEventDay';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDayGetEventDayGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayGetEventDayGet$Plain$Response(params?: ApiEventDayGetEventDayGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventDayGetEventDayGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDayGetEventDayGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayGetEventDayGet$Plain(params?: ApiEventDayGetEventDayGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventDayGetEventDayGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDayGetEventDayGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayGetEventDayGet$Json$Response(params?: ApiEventDayGetEventDayGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventDayGetEventDayGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDayGetEventDayGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayGetEventDayGet$Json(params?: ApiEventDayGetEventDayGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventDayGetEventDayGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiEventDayAddEventDayPost()` */
  static readonly ApiEventDayAddEventDayPostPath = '/api/EventDay/AddEventDay';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDayAddEventDayPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventDayAddEventDayPost$Plain$Response(params?: ApiEventDayAddEventDayPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventDayAddEventDayPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDayAddEventDayPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventDayAddEventDayPost$Plain(params?: ApiEventDayAddEventDayPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventDayAddEventDayPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDayAddEventDayPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventDayAddEventDayPost$Json$Response(params?: ApiEventDayAddEventDayPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventDayAddEventDayPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDayAddEventDayPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventDayAddEventDayPost$Json(params?: ApiEventDayAddEventDayPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventDayAddEventDayPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiEventDayUpdateEventDayPut()` */
  static readonly ApiEventDayUpdateEventDayPutPath = '/api/EventDay/UpdateEventDay';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDayUpdateEventDayPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventDayUpdateEventDayPut$Plain$Response(params?: ApiEventDayUpdateEventDayPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventDayUpdateEventDayPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDayUpdateEventDayPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventDayUpdateEventDayPut$Plain(params?: ApiEventDayUpdateEventDayPut$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventDayUpdateEventDayPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDayUpdateEventDayPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventDayUpdateEventDayPut$Json$Response(params?: ApiEventDayUpdateEventDayPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventDayUpdateEventDayPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDayUpdateEventDayPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventDayUpdateEventDayPut$Json(params?: ApiEventDayUpdateEventDayPut$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventDayUpdateEventDayPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiEventDayDeleteEventEntityPut()` */
  static readonly ApiEventDayDeleteEventEntityPutPath = '/api/EventDay/DeleteEventEntity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDayDeleteEventEntityPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayDeleteEventEntityPut$Plain$Response(params?: ApiEventDayDeleteEventEntityPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventDayDeleteEventEntityPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDayDeleteEventEntityPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayDeleteEventEntityPut$Plain(params?: ApiEventDayDeleteEventEntityPut$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventDayDeleteEventEntityPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDayDeleteEventEntityPut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayDeleteEventEntityPut$Json$Response(params?: ApiEventDayDeleteEventEntityPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventDayDeleteEventEntityPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDayDeleteEventEntityPut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayDeleteEventEntityPut$Json(params?: ApiEventDayDeleteEventEntityPut$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventDayDeleteEventEntityPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

}
