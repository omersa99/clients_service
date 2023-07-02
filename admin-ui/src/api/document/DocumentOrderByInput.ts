import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  amount?: SortOrder;
  amountBeforeVat?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  discountAmount?: SortOrder;
  discountType?: SortOrder;
  docType?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  vatType?: SortOrder;
};
