/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { IdentityUser } from '../../models/identity-user';

export interface ApiUserGetGet$Json$Params {
}

export function apiUserGetGet$Json(http: HttpClient, rootUrl: string, params?: ApiUserGetGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<IdentityUser>>> {
  const rb = new RequestBuilder(rootUrl, apiUserGetGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<IdentityUser>>;
    })
  );
}

apiUserGetGet$Json.PATH = '/api/User/Get';
