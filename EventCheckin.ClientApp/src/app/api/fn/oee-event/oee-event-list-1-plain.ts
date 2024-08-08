/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';
import { OeeEventSearchModel } from '../../models/oee-event-search-model';

export interface OeeEventList_1$Plain$Params {
  from?: string;
  to?: string;
      body?: OeeEventSearchModel
}

export function oeeEventList_1$Plain(http: HttpClient, rootUrl: string, params?: OeeEventList_1$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, oeeEventList_1$Plain.PATH, 'post');
  if (params) {
    rb.query('from', params.from, {});
    rb.query('to', params.to, {});
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

oeeEventList_1$Plain.PATH = '/api/oeeevent/listoeeevent';
