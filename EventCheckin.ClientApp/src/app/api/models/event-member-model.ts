/* tslint:disable */
/* eslint-disable */
import { UserModel } from '../models/user-model';
export interface EventMemberModel {
  eventId?: boolean;
  guestNo?: number;
  id?: number;
  isPublished?: boolean;
  parentUserId?: number | null;
  parkNo?: number;
  user?: UserModel;
  userId?: number;
}
