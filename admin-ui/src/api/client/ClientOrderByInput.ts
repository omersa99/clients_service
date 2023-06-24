import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  active?: SortOrder;
  balance?: SortOrder;
  bn?: SortOrder;
  businessId?: SortOrder;
  createdAt?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
