/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';
import { TicketPassModel } from '../../models/ticket-pass-model';

export interface ApiTicketPassAddDeleteTicketPassesPost$Json$Params {
      body?: TicketPassModel
}

export function apiTicketPassAddDeleteTicketPassesPost$Json(http: HttpClient, rootUrl: string, params?: ApiTicketPassAddDeleteTicketPassesPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, apiTicketPassAddDeleteTicketPassesPost$Json.PATH, 'post');
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

apiTicketPassAddDeleteTicketPassesPost$Json.PATH = '/api/TicketPass/AddDeleteTicketPasses';
