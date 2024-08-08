/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { IdentityUser } from '../../models/identity-user';
import { UserSearchModel } from '../../models/user-search-model';

export interface ApiUserListUserGet$Plain$Params {
      body?: UserSearchModel
}

export function apiUserListUserGet$Plain(http: HttpClient, rootUrl: string, params?: ApiUserListUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<IdentityUser>>> {
  const rb = new RequestBuilder(rootUrl, apiUserListUserGet$Plain.PATH, 'get');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiUserListUserGet$Plain.PATH = '/api/User/ListUser';
