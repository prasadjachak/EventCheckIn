/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ActivityLogSearchModel } from '../../models/activity-log-search-model';
import { CustomApiResponse } from '../../models/custom-api-response';

export interface ActivityLogListLogs$Json$Params {
  CreatedOnFrom?: string;
  CreatedOnTo?: string;
      body?: ActivityLogSearchModel
}

export function activityLogListLogs$Json(http: HttpClient, rootUrl: string, params?: ActivityLogListLogs$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, activityLogListLogs$Json.PATH, 'post');
  if (params) {
    rb.query('CreatedOnFrom', params.CreatedOnFrom, {});
    rb.query('CreatedOnTo', params.CreatedOnTo, {});
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

activityLogListLogs$Json.PATH = '/api/activitylog/ListLogs/listlogs';
