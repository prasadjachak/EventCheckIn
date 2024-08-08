/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';

export interface AnalyticsFetchDistinctMaterial$Plain$Params {
  unitId?: number;
  lineId?: number;
  shiftId?: number;
  materialId?: number;
  from?: string;
  to?: string;
}

export function analyticsFetchDistinctMaterial$Plain(http: HttpClient, rootUrl: string, params?: AnalyticsFetchDistinctMaterial$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, analyticsFetchDistinctMaterial$Plain.PATH, 'post');
  if (params) {
    rb.query('unitId', params.unitId, {});
    rb.query('lineId', params.lineId, {});
    rb.query('shiftId', params.shiftId, {});
    rb.query('materialId', params.materialId, {});
    rb.query('from', params.from, {});
    rb.query('to', params.to, {});
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

analyticsFetchDistinctMaterial$Plain.PATH = '/api/analytics/fetchdistinctmaterial';
