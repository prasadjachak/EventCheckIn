/* tslint:disable */
/* eslint-disable */


/**
 * Represents a reason model
 */
export interface EquipmentReasonModel {
  amount?: number | null;
  category?: string | null;

  count?: number | null;
  createdAt?: string | null;
  customProperties?: {
[key: string]: string | null;
};
  description?: string | null;
  displayOrder?: number;
  downTime?: string | null;
  duration?: number | null;
  equipmentId?: number | null;
  equipmentIds?: Array<number> | null;
  id?: number;
  isDefault?: boolean;
  loss?: string | null;
  name?: string | null;
  parentId?: number | null;
  productionType?: number;
  published?: boolean;
  subCategory?: string | null;
  reasonId?: number | null;
  timeLossId?: number;
  totalCount?: number;
  totalDuration?: number;
  updatedAt?: string | null;
}
