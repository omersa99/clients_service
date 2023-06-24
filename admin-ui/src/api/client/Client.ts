import { Business } from "../business/Business";

export type Client = {
  active: boolean | null;
  balance: number;
  bn: number;
  business?: Business | null;
  createdAt: Date;
  fullName: string;
  id: string;
  updatedAt: Date;
};
