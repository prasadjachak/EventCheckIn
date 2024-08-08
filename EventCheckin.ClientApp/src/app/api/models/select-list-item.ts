/* tslint:disable */
/* eslint-disable */
import { SelectListGroup } from '../models/select-list-group';
export interface SelectListItem {
  disabled?: boolean;
  group?: SelectListGroup;
  selected?: boolean;
  text?: string | null;
  value?: string | null;
}
