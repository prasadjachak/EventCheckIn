/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';

export interface OeeEventDeleteOeeEventByProduction$Plain$Params {
  id?: number;
  productionType?: string;
}

export function oeeEventDeleteOeeEventByProduction$Plain(http: HttpClient, rootUrl: string, params?: OeeEventDeleteOeeEventByProduction$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, oeeEventDeleteOeeEventByProduction$Plain.PATH, 'post');
  if (params) {
    rb.query('id', params.id, {});
    rb.query('productionType', params.productionType, {});
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

oeeEventDeleteOeeEventByProduction$Plain.PATH = '/api/oeeevent/deleteoeeeventproduction';
