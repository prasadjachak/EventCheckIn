/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';

export interface MessageTemplateTestTemplate$Plain$Params {
  id?: number;
  languageId?: number;
}

export function messageTemplateTestTemplate$Plain(http: HttpClient, rootUrl: string, params?: MessageTemplateTestTemplate$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, messageTemplateTestTemplate$Plain.PATH, 'post');
  if (params) {
    rb.query('id', params.id, {});
    rb.query('languageId', params.languageId, {});
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

messageTemplateTestTemplate$Plain.PATH = '/api/messagetemplate/testtemplate';
