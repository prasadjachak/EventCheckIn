/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';
import { EmailAccountModel } from '../../models/email-account-model';

export interface EmailAccountEdit_1$Plain$Params {
  continueEditing?: boolean;
      body?: EmailAccountModel
}

export function emailAccountEdit_1$Plain(http: HttpClient, rootUrl: string, params?: EmailAccountEdit_1$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, emailAccountEdit_1$Plain.PATH, 'post');
  if (params) {
    rb.query('continueEditing', params.continueEditing, {});
    rb.body(params.body, 'application/*+json');
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

emailAccountEdit_1$Plain.PATH = '/api/emailaccount/Edit/editemailaccount';
