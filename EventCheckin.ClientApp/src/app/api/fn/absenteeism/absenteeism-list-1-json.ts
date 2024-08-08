/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AbsenteeismSearchModel } from '../../models/absenteeism-search-model';
import { CustomApiResponse } from '../../models/custom-api-response';

export interface AbsenteeismList_1$Json$Params {
  from?: string;
  to?: string;
      body?: AbsenteeismSearchModel
}

export function absenteeismList_1$Json(http: HttpClient, rootUrl: string, params?: AbsenteeismList_1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, absenteeismList_1$Json.PATH, 'post');
  if (params) {
    rb.query('from', params.from, {});
    rb.query('to', params.to, {});
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

absenteeismList_1$Json.PATH = '/api/absenteeism/listabsenteeism';
