/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiEventAddEventEntityPost } from '../fn/event/api-event-add-event-entity-post';
import { ApiEventAddEventEntityPost$Params } from '../fn/event/api-event-add-event-entity-post';
import { apiEventGetEventEntityGet } from '../fn/event/api-event-get-event-entity-get';
import { ApiEventGetEventEntityGet$Params } from '../fn/event/api-event-get-event-entity-get';
import { apiEventGetEventEntitysGet } from '../fn/event/api-event-get-event-entitys-get';
import { ApiEventGetEventEntitysGet$Params } from '../fn/event/api-event-get-event-entitys-get';
import { apiEventUpdateEventEntityPut } from '../fn/event/api-event-update-event-entity-put';
import { ApiEventUpdateEventEntityPut$Params } from '../fn/event/api-event-update-event-entity-put';

@Injectable({ providedIn: 'root' })
export class EventService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiEventGetEventEntitysGet()` */
  static readonly ApiEventGetEventEntitysGetPath = '/api/Event/GetEventEntitys';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventGetEventEntitysGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGetEventEntitysGet$Response(params?: ApiEventGetEventEntitysGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventGetEventEntitysGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventGetEventEntitysGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGetEventEntitysGet(params?: ApiEventGetEventEntitysGet$Params, context?: HttpContext): Observable<void> {
    return this.apiEventGetEventEntitysGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventGetEventEntityGet()` */
  static readonly ApiEventGetEventEntityGetPath = '/api/Event/GetEventEntity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventGetEventEntityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGetEventEntityGet$Response(params?: ApiEventGetEventEntityGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventGetEventEntityGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventGetEventEntityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventGetEventEntityGet(params?: ApiEventGetEventEntityGet$Params, context?: HttpContext): Observable<void> {
    return this.apiEventGetEventEntityGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventAddEventEntityPost()` */
  static readonly ApiEventAddEventEntityPostPath = '/api/Event/AddEventEntity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventAddEventEntityPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventAddEventEntityPost$Response(params?: ApiEventAddEventEntityPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventAddEventEntityPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventAddEventEntityPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventAddEventEntityPost(params?: ApiEventAddEventEntityPost$Params, context?: HttpContext): Observable<void> {
    return this.apiEventAddEventEntityPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventUpdateEventEntityPut()` */
  static readonly ApiEventUpdateEventEntityPutPath = '/api/Event/UpdateEventEntity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventUpdateEventEntityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventUpdateEventEntityPut$Response(params?: ApiEventUpdateEventEntityPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventUpdateEventEntityPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventUpdateEventEntityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventUpdateEventEntityPut(params?: ApiEventUpdateEventEntityPut$Params, context?: HttpContext): Observable<void> {
    return this.apiEventUpdateEventEntityPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
