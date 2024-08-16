/* tslint:disable */
/* eslint-disable */
import { SelectListItem } from '../models/select-list-item';
export interface UserSearchModel {
  access_token?: string | null;
  availableUserRoles?: Array<SelectListItem> | null;
  exp?: number | null;
  expires_in?: number | null;
  firstNameEnabled?: boolean;
  pageNumber?: number;
  pageSize?: number;
  refresh_token?: string | null;
  searchEmail?: string | null;
  searchFirstName?: string | null;
  searchLastName?: string | null;
  searchPhone?: string | null;
  searchRolename?: string | null;
  searchUsername?: string | null;
  selectedRoleIds?: Array<number> | null;
  token_type?: string | null;
  usernamesEnabled?: boolean;
}
