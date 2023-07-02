import { JsonValue } from "type-fest";
import { Client } from "../client/Client";

export type Business = {
  accountingType?: "Unknown" | "Cash" | "Accumulated" | null;
  active: boolean | null;
  address: JsonValue;
  businessType?: "OsekMurshe" | "LtdCompany" | "OsekPatur" | null;
  clients?: Array<Client>;
  createdAt: Date;
  deductionId: string | null;
  deductionRate: string | null;
  exemption: boolean | null;
  id: string;
  taxId: number | null;
  title: string | null;
  updatedAt: Date;
};
