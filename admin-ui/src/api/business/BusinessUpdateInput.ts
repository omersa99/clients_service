import { InputJsonValue } from "../../types";
import { ClientUpdateManyWithoutBusinessesInput } from "./ClientUpdateManyWithoutBusinessesInput";

export type BusinessUpdateInput = {
  accountingType?: "Unknown" | "Cash" | "Accumulated" | null;
  active?: boolean | null;
  address?: InputJsonValue;
  businessType?: "OsekMurshe" | "LtdCompany" | "OsekPatur" | null;
  clients?: ClientUpdateManyWithoutBusinessesInput;
  deductionId?: string | null;
  deductionRate?: string | null;
  exemption?: boolean | null;
  taxId?: number | null;
  title?: string | null;
};
