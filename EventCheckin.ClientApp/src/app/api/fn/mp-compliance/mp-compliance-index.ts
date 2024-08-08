/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface MpComplianceIndex$Params {
  UnitId?: number;
  FromDate?: string;
  ToDate?: string;
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

export function mpComplianceIndex(http: HttpClient, rootUrl: string, params?: MpComplianceIndex$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, mpComplianceIndex.PATH, 'get');
  if (params) {
    rb.query('UnitId', params.UnitId, {});
    rb.query('FromDate', params.FromDate, {});
    rb.query('ToDate', params.ToDate, {});
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

mpComplianceIndex.PATH = '/api/mpcompliance/index';
