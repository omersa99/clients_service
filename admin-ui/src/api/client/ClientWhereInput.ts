import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientWhereInput = {
  bn?: IntFilter;
  fullName?: StringFilter;
  id?: StringFilter;
};
