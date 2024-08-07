/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegisterViewModel } from '../../models/register-view-model';

export interface ApiVueBoilerplateRegisterCircumventPost$Params {
      body?: RegisterViewModel
}

export function apiVueBoilerplateRegisterCircumventPost(http: HttpClient, rootUrl: string, params?: ApiVueBoilerplateRegisterCircumventPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiVueBoilerplateRegisterCircumventPost.PATH, 'post');
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

apiVueBoilerplateRegisterCircumventPost.PATH = '/api/VueBoilerplate/RegisterCircumvent';
