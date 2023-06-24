import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";

export type DocumentWhereInput = {
  amount?: FloatNullableFilter;
  amountBeforeVat?: FloatNullableFilter;
  description?: StringNullableFilter;
  docType?: "Receipt" | "Invoice";
  id?: StringFilter;
  items?: ItemListRelationFilter;
  status?: "Open" | "Closed";
  vatType?: "Default" | "Included" | "Exempt";
};
