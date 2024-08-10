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
  id?: number;
  lockoutEnabled?: boolean;
  loggings?: Array<Logging> | null;
  name?: string | null;
  otp?: string | null;
  password?: string | null;
  phoneNumber?: string | null;
  roleId?: string | null;
  roleIds?: Array<number> | null;
  userId?: string | null;
  userName?: string | null;
  userRoles?: Array<RoleModel> | null;
}
