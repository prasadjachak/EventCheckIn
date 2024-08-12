/* tslint:disable */
/* eslint-disable */
import { UserModel } from '../models/user-model';
export interface EventMemberModel {
  addedGuestNo?: number;
  addedParkNo?: number;
  eventId?: number;
  guestNo?: number;
  id?: number;
  isPublished?: boolean;
  parentUserId?: number | null;
  parkNo?: number;
  pendingGuestNo?: number;
  pendingParkNo?: number;
  user?: UserModel;
  userId?: number;
}
