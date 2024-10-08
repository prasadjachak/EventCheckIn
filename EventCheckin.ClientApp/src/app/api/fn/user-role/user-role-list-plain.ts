/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiResponse } from '../../models/api-response';
import { UserRoleSearchModel } from '../../models/user-role-search-model';

export interface UserRoleList$Plain$Params {
      body?: UserRoleSearchModel
}

export function userRoleList$Plain(http: HttpClient, rootUrl: string, params?: UserRoleList$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponse>> {
  const rb = new RequestBuilder(rootUrl, userRoleList$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiResponse>;
    })
  );
}

userRoleList$Plain.PATH = '/api/team/listuserrole';
