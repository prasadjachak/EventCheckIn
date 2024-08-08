/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';
import { EventDayModel } from '../../models/event-day-model';

export interface ApiEventDayUpdateEventDayPut$Plain$Params {
      body?: EventDayModel
}

export function apiEventDayUpdateEventDayPut$Plain(http: HttpClient, rootUrl: string, params?: ApiEventDayUpdateEventDayPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, apiEventDayUpdateEventDayPut$Plain.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CustomApiResponse>;
    })
  );
}

apiEventDayUpdateEventDayPut$Plain.PATH = '/api/EventDay/UpdateEventDay';
