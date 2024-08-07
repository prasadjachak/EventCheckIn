/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiEventDayAddPostPost } from '../fn/event-day/api-event-day-add-post-post';
import { ApiEventDayAddPostPost$Params } from '../fn/event-day/api-event-day-add-post-post';
import { apiEventDayGetPostGet } from '../fn/event-day/api-event-day-get-post-get';
import { ApiEventDayGetPostGet$Params } from '../fn/event-day/api-event-day-get-post-get';
import { apiEventDayGetPostsGet } from '../fn/event-day/api-event-day-get-posts-get';
import { ApiEventDayGetPostsGet$Params } from '../fn/event-day/api-event-day-get-posts-get';
import { apiEventDayUpdatePostPut } from '../fn/event-day/api-event-day-update-post-put';
import { ApiEventDayUpdatePostPut$Params } from '../fn/event-day/api-event-day-update-post-put';

@Injectable({ providedIn: 'root' })
export class EventDayService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiEventDayGetPostsGet()` */
  static readonly ApiEventDayGetPostsGetPath = '/api/EventDay/GetPosts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDayGetPostsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayGetPostsGet$Response(params?: ApiEventDayGetPostsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventDayGetPostsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDayGetPostsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayGetPostsGet(params?: ApiEventDayGetPostsGet$Params, context?: HttpContext): Observable<void> {
    return this.apiEventDayGetPostsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventDayGetPostGet()` */
  static readonly ApiEventDayGetPostGetPath = '/api/EventDay/GetPost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDayGetPostGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayGetPostGet$Response(params?: ApiEventDayGetPostGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventDayGetPostGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDayGetPostGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventDayGetPostGet(params?: ApiEventDayGetPostGet$Params, context?: HttpContext): Observable<void> {
    return this.apiEventDayGetPostGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventDayAddPostPost()` */
  static readonly ApiEventDayAddPostPostPath = '/api/EventDay/AddPost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDayAddPostPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventDayAddPostPost$Response(params?: ApiEventDayAddPostPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventDayAddPostPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDayAddPostPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventDayAddPostPost(params?: ApiEventDayAddPostPost$Params, context?: HttpContext): Observable<void> {
    return this.apiEventDayAddPostPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventDayUpdatePostPut()` */
  static readonly ApiEventDayUpdatePostPutPath = '/api/EventDay/UpdatePost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventDayUpdatePostPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventDayUpdatePostPut$Response(params?: ApiEventDayUpdatePostPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventDayUpdatePostPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventDayUpdatePostPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventDayUpdatePostPut(params?: ApiEventDayUpdatePostPut$Params, context?: HttpContext): Observable<void> {
    return this.apiEventDayUpdatePostPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
