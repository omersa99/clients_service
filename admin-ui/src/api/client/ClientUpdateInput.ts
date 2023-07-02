import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type ClientUpdateInput = {
  active?: boolean | null;
  balance?: number;
  bn?: number;
  business?: BusinessWhereUniqueInput | null;
  fullName?: string;
};
