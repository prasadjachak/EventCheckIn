/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';
import { EnergyPanelModel } from '../../models/energy-panel-model';

export interface EnergyPanelListWasteConsumptionChart$Json$Params {
  from?: string;
  to?: string;
      body?: EnergyPanelModel
}

export function energyPanelListWasteConsumptionChart$Json(http: HttpClient, rootUrl: string, params?: EnergyPanelListWasteConsumptionChart$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, energyPanelListWasteConsumptionChart$Json.PATH, 'post');
  if (params) {
    rb.query('from', params.from, {});
    rb.query('to', params.to, {});
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

energyPanelListWasteConsumptionChart$Json.PATH = '/api/energypanel/listwasteconsumptionchart';
