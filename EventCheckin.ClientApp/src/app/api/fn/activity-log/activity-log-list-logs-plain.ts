/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ActivityLogSearchModel } from '../../models/activity-log-search-model';
import { CustomApiResponse } from '../../models/custom-api-response';

export interface ActivityLogListLogs$Plain$Params {
  CreatedOnFrom?: string;
  CreatedOnTo?: string;
      body?: ActivityLogSearchModel
}

export function activityLogListLogs$Plain(http: HttpClient, rootUrl: string, params?: ActivityLogListLogs$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, activityLogListLogs$Plain.PATH, 'post');
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

activityLogListLogs$Plain.PATH = '/api/activitylog/ListLogs/listlogs';
