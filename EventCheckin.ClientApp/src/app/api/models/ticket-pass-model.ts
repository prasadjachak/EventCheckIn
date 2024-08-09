/* tslint:disable */
/* eslint-disable */
import { EventModel } from '../models/event-model';
import { UserModel } from '../models/user-model';
export interface TicketPassModel {
  allowedGuest?: number;
  allowedParkingCount?: number;
  assignedBy?: number;
  assignedDateUtc?: string;
  eventDayId?: number;
  eventModel?: EventModel;
  id?: number;
  passDay?: string | null;
  passFromTime?: string | null;
  passToTime?: string | null;
  ticketNo?: string | null;
  userId?: number;
  userModel?: UserModel;
}
