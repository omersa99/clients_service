import { InputJsonValue } from "../../types";
import { ClientCreateNestedManyWithoutBusinessesInput } from "./ClientCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  accountingType?: "Unknown" | "Cash" | "Accumulated" | null;
  active?: boolean | null;
  address?: InputJsonValue;
  businessType?: "OsekMurshe" | "LtdCompany" | "OsekPatur" | null;
  clients?: ClientCreateNestedManyWithoutBusinessesInput;
  deductionId?: string | null;
  deductionRate?: string | null;
  exemption?: boolean | null;
  taxId?: number | null;
  title?: string | null;
};
