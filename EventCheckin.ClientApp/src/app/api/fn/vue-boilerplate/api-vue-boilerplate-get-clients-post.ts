/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ClientsOverviewFilterDto } from '../../models/clients-overview-filter-dto';

export interface ApiVueBoilerplateGetClientsPost$Params {
      body?: ClientsOverviewFilterDto
}

export function apiVueBoilerplateGetClientsPost(http: HttpClient, rootUrl: string, params?: ApiVueBoilerplateGetClientsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiVueBoilerplateGetClientsPost.PATH, 'post');
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

apiVueBoilerplateGetClientsPost.PATH = '/api/VueBoilerplate/GetClients';
