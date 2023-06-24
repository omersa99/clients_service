import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BusinessWhereInput = {
  accountingType?: "Unknown" | "Cash" | "Accumulated";
  active?: BooleanNullableFilter;
  address?: StringNullableFilter;
  clients?: ClientListRelationFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
