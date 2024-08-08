/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomApiResponse } from '../../models/custom-api-response';

export interface MessageTemplateTestTemplate$Json$Params {
  id?: number;
  languageId?: number;
}

export function messageTemplateTestTemplate$Json(http: HttpClient, rootUrl: string, params?: MessageTemplateTestTemplate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomApiResponse>> {
  const rb = new RequestBuilder(rootUrl, messageTemplateTestTemplate$Json.PATH, 'post');
  if (params) {
    rb.query('id', params.id, {});
    rb.query('languageId', params.languageId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CustomApiResponse>;
    })
  );
}

messageTemplateTestTemplate$Json.PATH = '/api/messagetemplate/testtemplate';
