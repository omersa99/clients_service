import { ClientUpdateManyWithoutBusinessesInput } from "./ClientUpdateManyWithoutBusinessesInput";

export type BusinessUpdateInput = {
  accountingType?: "Unknown" | "Cash" | "Accumulated" | null;
  active?: boolean | null;
  address?: string | null;
  clients?: ClientUpdateManyWithoutBusinessesInput;
  title?: string | null;
};
