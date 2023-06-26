import { SortOrder } from "../../util/SortOrder";

export type BusinessOrderByInput = {
  accountingType?: SortOrder;
  active?: SortOrder;
  address?: SortOrder;
  businessType?: SortOrder;
  createdAt?: SortOrder;
  deductionId?: SortOrder;
  deductionRate?: SortOrder;
  exemption?: SortOrder;
  id?: SortOrder;
  taxId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
