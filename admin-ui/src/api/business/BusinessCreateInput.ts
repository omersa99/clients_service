import { ClientCreateNestedManyWithoutBusinessesInput } from "./ClientCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  accountingType?: "Unknown" | "Cash" | "Accumulated" | null;
  active?: boolean | null;
  address?: string | null;
  clients?: ClientCreateNestedManyWithoutBusinessesInput;
  title?: string | null;
};
