/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';
import { TestMessageTemplateModel } from '../../models/test-message-template-model';

export interface MessageTemplateTestTemplate_1$Plain$Params {
      body?: TestMessageTemplateModel
}

export function messageTemplateTestTemplate_1$Plain(http: HttpClient, rootUrl: string, params?: MessageTemplateTestTemplate_1$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, messageTemplateTestTemplate_1$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
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

messageTemplateTestTemplate_1$Plain.PATH = '/api/messagetemplate/testmessagetemplate';
