/* tslint:disable */
/* eslint-disable */
import { Logging } from '../models/logging';
export interface ApplicationUser {
  accessFailedCount?: number;
  birthDate?: string;
  concurrencyStamp?: string | null;
  deviceId?: string | null;
  deviceOTP?: string | null;
  email?: string | null;
  emailConfirmed?: boolean;
  id?: number;
  lockoutEnabled?: boolean;
  lockoutEnd?: string | null;
  loggings?: Array<Logging> | null;
  memberNo?: string | null;
  name?: string | null;
  normalizedEmail?: string | null;
  normalizedUserName?: string | null;
  otp?: string | null;
  otpTimeStamp?: string | null;
  parentId?: number;
  parentMemberId?: number;
  passwordHash?: string | null;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  remark?: string | null;
  securityStamp?: string | null;
  twoFactorEnabled?: boolean;
  userName?: string | null;
}
