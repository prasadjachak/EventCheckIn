/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';
import { EnergyConsumptionModel } from '../../models/energy-consumption-model';

export interface EnergyConsumptionEdit_1$Plain$Params {
      body?: EnergyConsumptionModel
}

export function energyConsumptionEdit_1$Plain(http: HttpClient, rootUrl: string, params?: EnergyConsumptionEdit_1$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, energyConsumptionEdit_1$Plain.PATH, 'post');
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

energyConsumptionEdit_1$Plain.PATH = '/api/energyconsumption/editenergyconsumption';
