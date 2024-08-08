/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CapacityUtilizationModel } from '../../models/capacity-utilization-model';
import { CustomApiResponse } from '../../models/custom-api-response';

export interface CapacityUtilizationCreate_1$Plain$Params {
      body?: CapacityUtilizationModel
}

export function capacityUtilizationCreate_1$Plain(http: HttpClient, rootUrl: string, params?: CapacityUtilizationCreate_1$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, capacityUtilizationCreate_1$Plain.PATH, 'post');
  if (params) {
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

capacityUtilizationCreate_1$Plain.PATH = '/api/capacityutilization/createcapacityutilization';
