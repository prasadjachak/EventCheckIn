/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';
import { EntityScheduleModel } from '../../models/entity-schedule-model';

export interface OeeEventDeleteOeeEventByReason$Json$Params {
  equipmentId?: number;
      body?: EntityScheduleModel
}

export function oeeEventDeleteOeeEventByReason$Json(http: HttpClient, rootUrl: string, params?: OeeEventDeleteOeeEventByReason$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, oeeEventDeleteOeeEventByReason$Json.PATH, 'post');
  if (params) {
    rb.query('equipmentId', params.equipmentId, {});
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

oeeEventDeleteOeeEventByReason$Json.PATH = '/api/oeeevent/deleteoeeeventbyreason';
