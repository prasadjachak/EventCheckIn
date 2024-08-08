/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';
import { ReasonModel } from '../../models/reason-model';

export interface ReasonDeleteEquipmentReason$Plain$Params {
      body?: ReasonModel
}

export function reasonDeleteEquipmentReason$Plain(http: HttpClient, rootUrl: string, params?: ReasonDeleteEquipmentReason$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, reasonDeleteEquipmentReason$Plain.PATH, 'post');
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

reasonDeleteEquipmentReason$Plain.PATH = '/api/reason/deleteequipmentreason';
