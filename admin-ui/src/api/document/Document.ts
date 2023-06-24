import { Item } from "../item/Item";

export type Document = {
  amount: number | null;
  amountBeforeVat: number | null;
  createdAt: Date;
  description: string | null;
  docType?: "Receipt" | "Invoice" | null;
  id: string;
  items?: Array<Item>;
  status?: "Open" | "Closed" | null;
  updatedAt: Date;
  vatType?: "Default" | "Included" | "Exempt" | null;
};
