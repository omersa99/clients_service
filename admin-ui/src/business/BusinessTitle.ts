import { Business as TBusiness } from "../api/business/Business";

export const BUSINESS_TITLE_FIELD = "title";

export const BusinessTitle = (record: TBusiness): string => {
  return record.title || String(record.id);
};
