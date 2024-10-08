/* tslint:disable */
/* eslint-disable */
import { EventModel } from '../models/event-model';
import { UserModel } from '../models/user-model';
export interface TicketPassModel {
  allowedGuestCount?: number;
  allowedParkingCount?: number;
  assignedBy?: number;
  assignedDateUtc?: string | null;
  enteredOTP?: string | null;
  enteredParkingOTP?: string | null;
  entryOTP?: string | null;
  entryOTPTime?: string | null;
  entrySecurity?: string | null;
  entryStatus?: number;
  entryStatusName?: string | null;
  eventId?: number;
  eventModel?: EventModel;
  id?: number;
  isActive?: boolean;
  isInviteSelected?: boolean;
  isParkingAllowed?: boolean;
  isParkingSelected?: boolean;
  name?: string | null;
  parkSecurity?: string | null;
  parkStatus?: number;
  parkStatusName?: string | null;
  parkingOTP?: string | null;
  parkingOTPTime?: string | null;
  passDay?: string | null;
  passFromTime?: string | null;
  passToTime?: string | null;
  phoneNumber?: string | null;
  ticketNo?: string | null;
  userId?: number;
  userModel?: UserModel;
}
