import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "discountAmount";

export const DocumentTitle = (record: TDocument): string => {
  return record.discountAmount || String(record.id);
};
