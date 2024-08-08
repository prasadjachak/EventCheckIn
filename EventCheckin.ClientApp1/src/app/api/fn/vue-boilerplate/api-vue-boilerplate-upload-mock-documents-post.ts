/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiVueBoilerplateUploadMockDocumentsPost$Params {
      body?: {
'ArticleId'?: number;
'DocumentTypeId'?: string;
'File'?: Blob;
}
}

export function apiVueBoilerplateUploadMockDocumentsPost(http: HttpClient, rootUrl: string, params?: ApiVueBoilerplateUploadMockDocumentsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiVueBoilerplateUploadMockDocumentsPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
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

apiVueBoilerplateUploadMockDocumentsPost.PATH = '/api/VueBoilerplate/UploadMockDocuments';
