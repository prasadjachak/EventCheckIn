/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ShiftIndex$Params {
  Is_System?: boolean;
  Page?: number;
  PageSize?: number;
  AvailablePageSizes?: string;
  Draw?: string;
  Start?: number;
  Length?: number;
  CustomProperties?: {
[key: string]: string | null;
};
  Id?: number;
}

export function shiftIndex(http: HttpClient, rootUrl: string, params?: ShiftIndex$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, shiftIndex.PATH, 'get');
  if (params) {
    rb.query('Is_System', params.Is_System, {});
    rb.query('Page', params.Page, {});
    rb.query('PageSize', params.PageSize, {});
    rb.query('AvailablePageSizes', params.AvailablePageSizes, {});
    rb.query('Draw', params.Draw, {});
    rb.query('Start', params.Start, {});
    rb.query('Length', params.Length, {});
    rb.query('CustomProperties', params.CustomProperties, {});
    rb.query('Id', params.Id, {});
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

shiftIndex.PATH = '/api/shift';
