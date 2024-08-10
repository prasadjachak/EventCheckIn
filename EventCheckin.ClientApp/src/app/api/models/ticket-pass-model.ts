/* tslint:disable */
/* eslint-disable */
import { EventModel } from '../models/event-model';
import { UserModel } from '../models/user-model';
export interface TicketPassModel {
  allowedGuest?: number;
  allowedParkingCount?: number;
  assignedBy?: number;
  assignedDateUtc?: string | null;
  entryOTP?: string | null;
  entryOTPTime?: string | null;
  entrySecurity?: string | null;
  entryStatus?: number;
  eventId?: number;
  eventModel?: EventModel;
  id?: number;
  parkSecurity?: string | null;
  parkStatus?: number;
  parkingOTP?: string | null;
  parkingOTPTime?: string | null;
  passDay?: string | null;
  passFromTime?: string | null;
  passToTime?: string | null;
  ticketNo?: string | null;
  userId?: number;
  userModel?: UserModel;
}
