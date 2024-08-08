/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';

export interface ApiTicketPassGetTicketPassGet$Json$Params {
  eventEntityId?: number;
}

export function apiTicketPassGetTicketPassGet$Json(http: HttpClient, rootUrl: string, params?: ApiTicketPassGetTicketPassGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, apiTicketPassGetTicketPassGet$Json.PATH, 'get');
  if (params) {
    rb.query('eventEntityId', params.eventEntityId, {});
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

apiTicketPassGetTicketPassGet$Json.PATH = '/api/TicketPass/GetTicketPass';
