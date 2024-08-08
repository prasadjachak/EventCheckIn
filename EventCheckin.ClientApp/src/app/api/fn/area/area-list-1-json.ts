/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AreaSearchModel } from '../../models/area-search-model';
import { CustomApiResponse } from '../../models/custom-api-response';

export interface AreaList_1$Json$Params {
      body?: AreaSearchModel
}

export function areaList_1$Json(http: HttpClient, rootUrl: string, params?: AreaList_1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, areaList_1$Json.PATH, 'post');
  if (params) {
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

areaList_1$Json.PATH = '/api/area/listarea';
