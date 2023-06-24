import { SortOrder } from "../../util/SortOrder";

export type BusinessOrderByInput = {
  accountingType?: SortOrder;
  active?: SortOrder;
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
