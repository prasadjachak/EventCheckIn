/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';

export interface EmailAccountEdit$Json$Params {
  id?: number;
  showtour?: boolean;
}

export function emailAccountEdit$Json(http: HttpClient, rootUrl: string, params?: EmailAccountEdit$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, emailAccountEdit$Json.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
    rb.query('showtour', params.showtour, {});
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

emailAccountEdit$Json.PATH = '/api/emailaccount/Edit/edit';
