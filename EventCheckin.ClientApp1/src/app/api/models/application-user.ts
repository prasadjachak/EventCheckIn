/* tslint:disable */
/* eslint-disable */
import { Logging } from '../models/logging';
export interface ApplicationUser {
  accessFailedCount?: number;
  birthDate?: string;
  concurrencyStamp?: string | null;
  deviceId?: string | null;
  email?: string | null;
  emailConfirmed?: boolean;
  firstName: string;
  fullName?: string | null;
  id?: number;
  lastName: string;
  lockoutEnabled?: boolean;
  lockoutEnd?: string | null;
  loggings?: Array<Logging> | null;
  normalizedEmail?: string | null;
  normalizedUserName?: string | null;
  otp?: string | null;
  passwordHash?: string | null;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  securityStamp?: string | null;
  title: string;
  twoFactorEnabled?: boolean;
  userName?: string | null;
}
