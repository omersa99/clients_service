import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type ItemUpdateInput = {
  description?: string | null;
  document?: DocumentWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
};
