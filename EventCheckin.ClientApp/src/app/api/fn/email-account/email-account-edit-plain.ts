/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';

export interface EmailAccountEdit$Plain$Params {
  id?: number;
  showtour?: boolean;
}

export function emailAccountEdit$Plain(http: HttpClient, rootUrl: string, params?: EmailAccountEdit$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, emailAccountEdit$Plain.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
    rb.query('showtour', params.showtour, {});
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

emailAccountEdit$Plain.PATH = '/api/emailaccount/Edit/edit';
