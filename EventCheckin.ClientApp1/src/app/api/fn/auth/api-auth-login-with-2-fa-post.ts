/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LoginWith2FaViewModel } from '../../models/login-with-2-fa-view-model';

export interface ApiAuthLoginWith2FaPost$Params {
      body?: LoginWith2FaViewModel
}

export function apiAuthLoginWith2FaPost(http: HttpClient, rootUrl: string, params?: ApiAuthLoginWith2FaPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiAuthLoginWith2FaPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

apiAuthLoginWith2FaPost.PATH = '/api/Auth/LoginWith2fa';
