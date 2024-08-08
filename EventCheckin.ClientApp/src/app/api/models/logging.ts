/* tslint:disable */
/* eslint-disable */
import { ApplicationUser } from '../models/application-user';
import { ELogType } from '../models/e-log-type';
export interface Logging {
  id?: number;
  logDatum?: string;
  logText?: string | null;
  logType?: ELogType;
  logValue: string;
  userId: number;
  userNavigation?: ApplicationUser;
}
