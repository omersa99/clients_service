import { ItemCreateNestedManyWithoutDocumentsInput } from "./ItemCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  amount?: number | null;
  amountBeforeVat?: number | null;
  description?: string | null;
  docType?: "Receipt" | "Invoice" | null;
  items?: ItemCreateNestedManyWithoutDocumentsInput;
  status?: "Open" | "Closed" | null;
  vatType?: "Default" | "Included" | "Exempt" | null;
};
