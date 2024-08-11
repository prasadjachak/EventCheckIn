/* tslint:disable */
/* eslint-disable */
import { EventModel } from '../models/event-model';
import { TicketPassModel } from '../models/ticket-pass-model';
export interface AssignPassModel {
  eventId?: number;
  events?: Array<EventModel> | null;
  ticketPasses?: Array<TicketPassModel> | null;
}
