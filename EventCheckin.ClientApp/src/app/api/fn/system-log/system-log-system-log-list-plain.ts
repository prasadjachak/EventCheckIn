/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';
import { SystemLogSearchModel } from '../../models/system-log-search-model';

export interface SystemLogSystemLogList$Plain$Params {
  CreatedOnFrom?: string;
  CreatedOnTo?: string;
      body?: SystemLogSearchModel
}

export function systemLogSystemLogList$Plain(http: HttpClient, rootUrl: string, params?: SystemLogSystemLogList$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, systemLogSystemLogList$Plain.PATH, 'post');
  if (params) {
    rb.query('CreatedOnFrom', params.CreatedOnFrom, {});
    rb.query('CreatedOnTo', params.CreatedOnTo, {});
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

systemLogSystemLogList$Plain.PATH = '/api/systemlog/SystemLogList/systemloglist';
