import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ItemWhereInput = {
  description?: StringNullableFilter;
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
