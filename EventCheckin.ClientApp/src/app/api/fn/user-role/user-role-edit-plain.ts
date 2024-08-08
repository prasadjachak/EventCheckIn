/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiResponse } from '../../models/api-response';
import { UserRoleModel } from '../../models/user-role-model';

export interface UserRoleEdit$Plain$Params {
  continueEditing?: boolean;
      body?: UserRoleModel
}

export function userRoleEdit$Plain(http: HttpClient, rootUrl: string, params?: UserRoleEdit$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponse>> {
  const rb = new RequestBuilder(rootUrl, userRoleEdit$Plain.PATH, 'post');
  if (params) {
    rb.query('continueEditing', params.continueEditing, {});
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

userRoleEdit$Plain.PATH = '/api/team/edituserrole';
