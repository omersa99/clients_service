import { FloatFilter } from "../../util/FloatFilter";
import { IntFilter } from "../../util/IntFilter";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ClientWhereInput = {
  balance?: FloatFilter;
  bn?: IntFilter;
  business?: BusinessWhereUniqueInput;
  fullName?: StringFilter;
  id?: StringFilter;
};
