import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BusinessWhereInput = {
  accountingType?: "Unknown" | "Cash" | "Accumulated";
  active?: BooleanNullableFilter;
  address?: JsonFilter;
  businessType?: "OsekMurshe" | "LtdCompany" | "OsekPatur";
  clients?: ClientListRelationFilter;
  deductionId?: StringNullableFilter;
  deductionRate?: StringNullableFilter;
  exemption?: BooleanNullableFilter;
  id?: StringFilter;
  taxId?: IntNullableFilter;
  title?: StringNullableFilter;
};
