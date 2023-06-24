import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  amount?: SortOrder;
  amountBeforeVat?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  docType?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  vatType?: SortOrder;
};
