import { Document } from "../document/Document";

export type Item = {
  createdAt: Date;
  description: string | null;
  document?: Document | null;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
