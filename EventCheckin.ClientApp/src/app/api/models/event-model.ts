/* tslint:disable */
/* eslint-disable */
import { EventMemberModel } from '../models/event-member-model';
export interface EventModel {
  addedGuestNo?: number;
  addedParkNo?: number;
  description?: string | null;
  endDate?: string | null;
  eventMember?: EventMemberModel;
  id: number;
  isLive?: boolean;
  isPublished?: boolean;
  name?: string | null;
  organiserId?: number;
  pendingGuestNo?: number;
  pendingParkNo?: number;
  startDate?: string | null;
  venueAddress1?: string | null;
  venueAddress2?: string | null;
  venueCity?: string | null;
  venueCountry?: string | null;
  venueLatlong?: number;
  venueLattitude?: number;
  venueName?: string | null;
  venuePincode?: string | null;
  venueState?: string | null;
}
