/* tslint:disable */
/* eslint-disable */
import { Logging } from '../models/logging';
import { RoleModel } from '../models/role-model';
export interface UserModel {
  birthDate?: string;
  confirmPassword?: string | null;
  deviceId?: string | null;
  email?: string | null;
  emailConfirmed?: boolean;
  firstName?: string | null;
  fullName?: string | null;
  id?: number;
  lastName?: string | null;
  lockoutEnabled?: boolean;
  loggings?: Array<Logging> | null;
  otp?: string | null;
  password?: string | null;
  phoneNumber?: string | null;
  roleId?: string | null;
  roles?: Array<RoleModel> | null;
  title?: string | null;
  userId?: string | null;
  userName?: string | null;
}
