/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';
import { TicketPassSearchModel } from '../../models/ticket-pass-search-model';

export interface ApiTicketPassSearchTicketPassesPost$Json$Params {
      body?: TicketPassSearchModel
}

export function apiTicketPassSearchTicketPassesPost$Json(http: HttpClient, rootUrl: string, params?: ApiTicketPassSearchTicketPassesPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, apiTicketPassSearchTicketPassesPost$Json.PATH, 'post');
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

apiTicketPassSearchTicketPassesPost$Json.PATH = '/api/TicketPass/SearchTicketPasses';
