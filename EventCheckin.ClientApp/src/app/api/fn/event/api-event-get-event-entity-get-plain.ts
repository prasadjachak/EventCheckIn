/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';

export interface ApiEventGetEventEntityGet$Plain$Params {
  eventEntityId?: number;
}

export function apiEventGetEventEntityGet$Plain(http: HttpClient, rootUrl: string, params?: ApiEventGetEventEntityGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, apiEventGetEventEntityGet$Plain.PATH, 'get');
  if (params) {
    rb.query('eventEntityId', params.eventEntityId, {});
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

apiEventGetEventEntityGet$Plain.PATH = '/api/Event/GetEventEntity';
