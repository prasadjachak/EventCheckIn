/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApplicationRole } from '../../models/application-role';

export interface ApiRolesGetGet$Plain$Params {
}

export function apiRolesGetGet$Plain(http: HttpClient, rootUrl: string, params?: ApiRolesGetGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApplicationRole>>> {
  const rb = new RequestBuilder(rootUrl, apiRolesGetGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ApplicationRole>>;
    })
  );
}

apiRolesGetGet$Plain.PATH = '/api/Roles/get';
