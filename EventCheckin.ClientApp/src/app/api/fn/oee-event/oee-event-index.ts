/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OeeEventType } from '../../models/oee-event-type';

export interface OeeEventIndex$Params {
  EventType?: OeeEventType;
  EntityScheduleId?: number;
  TeamId?: number;
  ReasonId?: number;
  ShiftId?: number;
  MaterialId?: number;
  PlantEntityId?: number;
  ShowStarted?: boolean;
  ShowStopped?: boolean;
  ShowAll?: boolean;
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

export function oeeEventIndex(http: HttpClient, rootUrl: string, params?: OeeEventIndex$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, oeeEventIndex.PATH, 'get');
  if (params) {
    rb.query('EventType', params.EventType, {});
    rb.query('EntityScheduleId', params.EntityScheduleId, {});
    rb.query('TeamId', params.TeamId, {});
    rb.query('ReasonId', params.ReasonId, {});
    rb.query('ShiftId', params.ShiftId, {});
    rb.query('MaterialId', params.MaterialId, {});
    rb.query('PlantEntityId', params.PlantEntityId, {});
    rb.query('ShowStarted', params.ShowStarted, {});
    rb.query('ShowStopped', params.ShowStopped, {});
    rb.query('ShowAll', params.ShowAll, {});
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

oeeEventIndex.PATH = '/api/oeeevent';
