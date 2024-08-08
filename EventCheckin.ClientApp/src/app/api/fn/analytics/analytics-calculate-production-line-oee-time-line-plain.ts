/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';

export interface AnalyticsCalculateProductionLineOeeTimeLine$Plain$Params {
  unitId?: number;
  lineId?: number;
  materialId?: number;
  from?: string;
  to?: string;
  timeLine?: string;
}

export function analyticsCalculateProductionLineOeeTimeLine$Plain(http: HttpClient, rootUrl: string, params?: AnalyticsCalculateProductionLineOeeTimeLine$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, analyticsCalculateProductionLineOeeTimeLine$Plain.PATH, 'post');
  if (params) {
    rb.query('unitId', params.unitId, {});
    rb.query('lineId', params.lineId, {});
    rb.query('materialId', params.materialId, {});
    rb.query('from', params.from, {});
    rb.query('to', params.to, {});
    rb.query('timeLine', params.timeLine, {});
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

analyticsCalculateProductionLineOeeTimeLine$Plain.PATH = '/api/analytics/getproductionlineoeetimeline';
