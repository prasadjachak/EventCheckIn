/* tslint:disable */
/* eslint-disable */
import { EventDayModel } from '../models/event-day-model';
import { UserModel } from '../models/user-model';
export interface TicketPassModel {
  allowedGuest?: number;
  allowedParkingCount?: number;
  assignedBy?: number;
  assignedDateUtc?: string;
  eventDayId?: number;
  eventDayModel?: EventDayModel;
  id?: number;
  passDay?: string | null;
  passFromTime?: string | null;
  passToTime?: string | null;
  ticketNo?: string | null;
  userId?: number;
  userModel?: UserModel;
}
