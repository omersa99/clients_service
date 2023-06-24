import { ItemUpdateManyWithoutDocumentsInput } from "./ItemUpdateManyWithoutDocumentsInput";

export type DocumentUpdateInput = {
  amount?: number | null;
  amountBeforeVat?: number | null;
  description?: string | null;
  docType?: "Receipt" | "Invoice" | null;
  items?: ItemUpdateManyWithoutDocumentsInput;
  status?: "Open" | "Closed" | null;
  vatType?: "Default" | "Included" | "Exempt" | null;
};
