/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { IdentityUser } from '../../models/identity-user';

export interface ApiUserGetGet$Plain$Params {
}

export function apiUserGetGet$Plain(http: HttpClient, rootUrl: string, params?: ApiUserGetGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<IdentityUser>>> {
  const rb = new RequestBuilder(rootUrl, apiUserGetGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<IdentityUser>>;
    })
  );
}

apiUserGetGet$Plain.PATH = '/api/User/Get';
