/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';

export interface AnalyticsCalculatePerformanceLossParetoOee$Json$Params {
  unitId?: number;
  lineId?: number;
  timeLoss?: string;
  from?: string;
  to?: string;
}

export function analyticsCalculatePerformanceLossParetoOee$Json(http: HttpClient, rootUrl: string, params?: AnalyticsCalculatePerformanceLossParetoOee$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, analyticsCalculatePerformanceLossParetoOee$Json.PATH, 'post');
  if (params) {
    rb.query('unitId', params.unitId, {});
    rb.query('lineId', params.lineId, {});
    rb.query('timeLoss', params.timeLoss, {});
    rb.query('from', params.from, {});
    rb.query('to', params.to, {});
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

analyticsCalculatePerformanceLossParetoOee$Json.PATH = '/api/analytics/getperformancelossparetooee';
