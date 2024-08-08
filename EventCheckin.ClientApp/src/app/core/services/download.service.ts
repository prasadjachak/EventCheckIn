/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfiguration } from 'app/api/api-configuration';
import { BaseService } from 'app/api/base-service';
import { EntitySchedulePdfDownloadOee$Params } from 'app/api/fn/entity-schedule/entity-schedule-pdf-download-oee';
import { ExportList_1$Params } from 'app/api/fn/export/export-list-1';
import { RequestBuilder } from 'app/api/request-builder';
import { StrictHttpResponse } from 'app/api/strict-http-response';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class DownloadService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }


  /** Path part for operation `exportList_1()` */
  static readonly ExportList_1Path = '/api/export/listplantentity';
  listplantentityPATH = '/api/export/listplantentity';
  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportList_1()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  exportList_1$Response(params?: ExportList_1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return this.exportList_1(this.http, this.rootUrl, params, context);
  }


  exportList_1(http: HttpClient, rootUrl: string, params?: ExportList_1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(rootUrl, this.listplantentityPATH, 'post');
    if (params) {
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
      rb.body(params.body, 'application/*+json');
    }

    return http.request(
      rb.build({ responseType: 'blob' as 'json', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }





  readonly pdfDownloadOeePATH = '/api/entityschedule/pdfdownloadoee';

  entitySchedulePdfDownloadOee$Response(params?: EntitySchedulePdfDownloadOee$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return this.entitySchedulePdfDownloadOee(this.http, this.rootUrl, params, context);
  }


 entitySchedulePdfDownloadOee(http: HttpClient, rootUrl: string, params?: EntitySchedulePdfDownloadOee$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, this.pdfDownloadOeePATH, 'post');
  if (params) {
    rb.query('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob' as 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}


}
