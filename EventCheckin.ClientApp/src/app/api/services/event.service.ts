/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiEventAddEventEntityPost$Json } from '../fn/event/api-event-add-event-entity-post-json';
import { ApiEventAddEventEntityPost$Json$Params } from '../fn/event/api-event-add-event-entity-post-json';
import { apiEventAddEventEntityPost$Plain } from '../fn/event/api-event-add-event-entity-post-plain';
import { ApiEventAddEventEntityPost$Plain$Params } from '../fn/event/api-event-add-event-entity-post-plain';
import { apiEventCreateeventmemberPost$Json } from '../fn/event/api-event-createeventmember-post-json';
import { ApiEventCreateeventmemberPost$Json$Params } from '../fn/event/api-event-createeventmember-post-json';
import { apiEventCreateeventmemberPost$Plain } from '../fn/event/api-event-createeventmember-post-plain';
import { ApiEventCreateeventmemberPost$Plain$Params } from '../fn/event/api-event-createeventmember-post-plain';
import { apiEventDeleteEventEntityPut$Json } from '../fn/event/api-event-delete-event-entity-put-json';
import { ApiEventDeleteEventEntityPut$Json$Params } from '../fn/event/api-event-delete-event-entity-put-json';
import { apiEventDeleteEventEntityPut$Plain } from '../fn/event/api-event-delete-event-entity-put-plain';
import { ApiEventDeleteEventEntityPut$Plain$Params } from '../fn/event/api-event-delete-event-entity-put-plain';
import { apiEventDeleteeventmemberPost$Json } from '../fn/event/api-event-deleteeventmember-post-json';
import { ApiEventDeleteeventmemberPost$Json$Params } from '../fn/event/api-event-deleteeventmember-post-json';
import { apiEventDeleteeventmemberPost$Plain } from '../fn/event/api-event-deleteeventmember-post-plain';
import { ApiEventDeleteeventmemberPost$Plain$Params } from '../fn/event/api-event-deleteeventmember-post-plain';
import { apiEventGetEventEntitiesByMemberIdGet$Json } from '../fn/event/api-event-get-event-entities-by-member-id-get-json';
import { ApiEventGetEventEntitiesByMemberIdGet$Json$Params } from '../fn/event/api-event-get-event-entities-by-member-id-get-json';
import { apiEventGetEventEntitiesByMemberIdGet$Plain } from '../fn/event/api-event-get-event-entities-by-member-id-get-plain';
import { ApiEventGetEventEntitiesByMemberIdGet$Plain$Params } from '../fn/event/api-event-get-event-entities-by-member-id-get-plain';
import { apiEventGetEventEntityGet$Json } from '../fn/event/api-event-get-event-entity-get-json';
import { ApiEventGetEventEntityGet$Json$Params } from '../fn/event/api-event-get-event-entity-get-json';
import { apiEventGetEventEntityGet$Plain } from '../fn/event/api-event-get-event-entity-get-plain';
import { ApiEventGetEventEntityGet$Plain$Params } from '../fn/event/api-event-get-event-entity-get-plain';
import { apiEventGeteventmemberlistPost$Json } from '../fn/event/api-event-geteventmemberlist-post-json';
import { ApiEventGeteventmemberlistPost$Json$Params } from '../fn/event/api-event-geteventmemberlist-post-json';
import { apiEventGeteventmemberlistPost$Plain } from '../fn/event/api-event-geteventmemberlist-post-plain';
import { ApiEventGeteventmemberlistPost$Plain$Params } from '../fn/event/api-event-geteventmemberlist-post-plain';
import { apiEventListEventEntitysGet$Json } from '../fn/event/api-event-list-event-entitys-get-json';
import { ApiEventListEventEntitysGet$Json$Params } from '../fn/event/api-event-list-event-entitys-get-json';
import { apiEventListEventEntitysGet$Plain } from '../fn/event/api-event-list-event-entitys-get-plain';
import { ApiEventListEventEntitysGet$Plain$Params } from '../fn/event/api-event-list-event-entitys-get-plain';
import { apiEventUpdateEventEntityPut$Json } from '../fn/event/api-event-update-event-entity-put-json';
import { ApiEventUpdateEventEntityPut$Json$Params } from '../fn/event/api-event-update-event-entity-put-json';
import { apiEventUpdateEventEntityPut$Plain } from '../fn/event/api-event-update-event-entity-put-plain';
import { ApiEventUpdateEventEntityPut$Plain$Params } from '../fn/event/api-event-update-event-entity-put-plain';
import { CustomApiResponse } from '../models/custom-api-response';

@Injectable({ providedIn: 'root' })
export class EventService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiEventListEventEntitysGet()` */
  static readonly ApiEventListEventEntitysGetPath = '/api/Event/ListEventEntitys';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventListEventEntitysGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventListEventEntitysGet$Plain$Response(params?: ApiEventListEventEntitysGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventListEventEntitysGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventListEventEntitysGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventListEventEntitysGet$Plain(params?: ApiEventListEventEntitysGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventListEventEntitysGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventListEventEntitysGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventListEventEntitysGet$Json$Response(params?: ApiEventListEventEntitysGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventListEventEntitysGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventListEventEntitysGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventListEventEntitysGet$Json(params?: ApiEventListEventEntitysGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventListEventEntitysGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiEventGetEventEntitiesByMemberIdGet()` */
  static readonly ApiEventGetEventEntitiesByMemberIdGetPath = '/api/Event/GetEventEntitiesByMemberId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventGetEventEntitiesByMemberIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGetEventEntitiesByMemberIdGet$Plain$Response(params?: ApiEventGetEventEntitiesByMemberIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventGetEventEntitiesByMemberIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventGetEventEntitiesByMemberIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGetEventEntitiesByMemberIdGet$Plain(params?: ApiEventGetEventEntitiesByMemberIdGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventGetEventEntitiesByMemberIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventGetEventEntitiesByMemberIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGetEventEntitiesByMemberIdGet$Json$Response(params?: ApiEventGetEventEntitiesByMemberIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventGetEventEntitiesByMemberIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventGetEventEntitiesByMemberIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGetEventEntitiesByMemberIdGet$Json(params?: ApiEventGetEventEntitiesByMemberIdGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventGetEventEntitiesByMemberIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiEventGetEventEntityGet()` */
  static readonly ApiEventGetEventEntityGetPath = '/api/Event/GetEventEntity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventGetEventEntityGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGetEventEntityGet$Plain$Response(params?: ApiEventGetEventEntityGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventGetEventEntityGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventGetEventEntityGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGetEventEntityGet$Plain(params?: ApiEventGetEventEntityGet$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventGetEventEntityGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventGetEventEntityGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGetEventEntityGet$Json$Response(params?: ApiEventGetEventEntityGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventGetEventEntityGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventGetEventEntityGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGetEventEntityGet$Json(params?: ApiEventGetEventEntityGet$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventGetEventEntityGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiEventAddEventEntityPost()` */
  static readonly ApiEventAddEventEntityPostPath = '/api/Event/AddEventEntity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventAddEventEntityPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventAddEventEntityPost$Plain$Response(params?: ApiEventAddEventEntityPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventAddEventEntityPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventAddEventEntityPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventAddEventEntityPost$Plain(params?: ApiEventAddEventEntityPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventAddEventEntityPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventAddEventEntityPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventAddEventEntityPost$Json$Response(params?: ApiEventAddEventEntityPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventAddEventEntityPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventAddEventEntityPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventAddEventEntityPost$Json(params?: ApiEventAddEventEntityPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventAddEventEntityPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiEventUpdateEventEntityPut()` */
  static readonly ApiEventUpdateEventEntityPutPath = '/api/Event/UpdateEventEntity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventUpdateEventEntityPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventUpdateEventEntityPut$Plain$Response(params?: ApiEventUpdateEventEntityPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventUpdateEventEntityPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventUpdateEventEntityPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventUpdateEventEntityPut$Plain(params?: ApiEventUpdateEventEntityPut$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventUpdateEventEntityPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventUpdateEventEntityPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventUpdateEventEntityPut$Json$Response(params?: ApiEventUpdateEventEntityPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventUpdateEventEntityPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventUpdateEventEntityPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventUpdateEventEntityPut$Json(params?: ApiEventUpdateEventEntityPut$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventUpdateEventEntityPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiEventDeleteEventEntityPut()` */
  static readonly ApiEventDeleteEventEntityPutPath = '/api/Event/DeleteEventEntity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDeleteEventEntityPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDeleteEventEntityPut$Plain$Response(params?: ApiEventDeleteEventEntityPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventDeleteEventEntityPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDeleteEventEntityPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDeleteEventEntityPut$Plain(params?: ApiEventDeleteEventEntityPut$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventDeleteEventEntityPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDeleteEventEntityPut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDeleteEventEntityPut$Json$Response(params?: ApiEventDeleteEventEntityPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventDeleteEventEntityPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDeleteEventEntityPut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDeleteEventEntityPut$Json(params?: ApiEventDeleteEventEntityPut$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventDeleteEventEntityPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiEventGeteventmemberlistPost()` */
  static readonly ApiEventGeteventmemberlistPostPath = '/api/Event/geteventmemberlist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventGeteventmemberlistPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGeteventmemberlistPost$Plain$Response(params?: ApiEventGeteventmemberlistPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventGeteventmemberlistPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventGeteventmemberlistPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGeteventmemberlistPost$Plain(params?: ApiEventGeteventmemberlistPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventGeteventmemberlistPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventGeteventmemberlistPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGeteventmemberlistPost$Json$Response(params?: ApiEventGeteventmemberlistPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventGeteventmemberlistPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventGeteventmemberlistPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGeteventmemberlistPost$Json(params?: ApiEventGeteventmemberlistPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventGeteventmemberlistPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiEventCreateeventmemberPost()` */
  static readonly ApiEventCreateeventmemberPostPath = '/api/Event/createeventmember';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventCreateeventmemberPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventCreateeventmemberPost$Plain$Response(params?: ApiEventCreateeventmemberPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventCreateeventmemberPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventCreateeventmemberPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventCreateeventmemberPost$Plain(params?: ApiEventCreateeventmemberPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventCreateeventmemberPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventCreateeventmemberPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventCreateeventmemberPost$Json$Response(params?: ApiEventCreateeventmemberPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventCreateeventmemberPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventCreateeventmemberPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventCreateeventmemberPost$Json(params?: ApiEventCreateeventmemberPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventCreateeventmemberPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /** Path part for operation `apiEventDeleteeventmemberPost()` */
  static readonly ApiEventDeleteeventmemberPostPath = '/api/Event/deleteeventmember';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDeleteeventmemberPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDeleteeventmemberPost$Plain$Response(params?: ApiEventDeleteeventmemberPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventDeleteeventmemberPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDeleteeventmemberPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDeleteeventmemberPost$Plain(params?: ApiEventDeleteeventmemberPost$Plain$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventDeleteeventmemberPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDeleteeventmemberPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDeleteeventmemberPost$Json$Response(params?: ApiEventDeleteeventmemberPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
    return apiEventDeleteeventmemberPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDeleteeventmemberPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDeleteeventmemberPost$Json(params?: ApiEventDeleteeventmemberPost$Json$Params, context?: HttpContext): Observable<CustomApiResponse> {
    return this.apiEventDeleteeventmemberPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomApiResponse>): CustomApiResponse => r.body)
    );
  }

}
