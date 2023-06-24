import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  active?: SortOrder;
  bn?: SortOrder;
  createdAt?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
