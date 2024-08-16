/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';

export interface ApiEventDeleteeventmemberPost$Plain$Params {
  eventMemberId?: number;
}

export function apiEventDeleteeventmemberPost$Plain(http: HttpClient, rootUrl: string, params?: ApiEventDeleteeventmemberPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, apiEventDeleteeventmemberPost$Plain.PATH, 'post');
  if (params) {
    rb.query('eventMemberId', params.eventMemberId, {});
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

apiEventDeleteeventmemberPost$Plain.PATH = '/api/Event/deleteeventmember';
