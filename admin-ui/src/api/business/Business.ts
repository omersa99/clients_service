import { Client } from "../client/Client";

export type Business = {
  accountingType?: "Unknown" | "Cash" | "Accumulated" | null;
  active: boolean | null;
  address: string | null;
  clients?: Array<Client>;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
