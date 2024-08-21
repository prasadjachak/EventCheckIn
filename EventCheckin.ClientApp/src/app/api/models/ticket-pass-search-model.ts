/* tslint:disable */
/* eslint-disable */
import { SelectListItem } from '../models/select-list-item';
export interface TicketPassSearchModel {
  availableEvents?: Array<SelectListItem> | null;
  selectedEventIds?: Array<number> | null;
}
