/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';
import { EventModel } from '../../models/event-model';

export interface ApiEventAddEventEntityPost$Json$Params {
      body?: EventModel
}

export function apiEventAddEventEntityPost$Json(http: HttpClient, rootUrl: string, params?: ApiEventAddEventEntityPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, apiEventAddEventEntityPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CustomApiResponse>;
    })
  );
}

apiEventAddEventEntityPost$Json.PATH = '/api/Event/AddEventEntity';
