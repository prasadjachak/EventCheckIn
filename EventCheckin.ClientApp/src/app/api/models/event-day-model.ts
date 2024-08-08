/* tslint:disable */
/* eslint-disable */
import { EventModel } from '../models/event-model';
export interface EventDayModel {
  endDate?: string | null;
  eventDayName?: string | null;
  eventId?: number;
  eventModel?: EventModel;
  id?: number;
  startDate?: string | null;
}
