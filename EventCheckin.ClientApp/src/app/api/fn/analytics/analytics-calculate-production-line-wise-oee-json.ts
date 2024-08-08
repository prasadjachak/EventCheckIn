/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';

export interface AnalyticsCalculateProductionLineWiseOee$Json$Params {
  unitId?: number;
  lineId?: number;
  from?: string;
  to?: string;
}

export function analyticsCalculateProductionLineWiseOee$Json(http: HttpClient, rootUrl: string, params?: AnalyticsCalculateProductionLineWiseOee$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, analyticsCalculateProductionLineWiseOee$Json.PATH, 'post');
  if (params) {
    rb.query('unitId', params.unitId, {});
    rb.query('lineId', params.lineId, {});
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

analyticsCalculateProductionLineWiseOee$Json.PATH = '/api/analytics/getproductionlinewiseoee';
